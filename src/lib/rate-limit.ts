/**
 * Simple in-memory rate limiter.
 *
 * Limits requests to `maxRequests` per `windowMs` milliseconds per unique key
 * (typically an IP address). Uses a sliding-window approach with a Map.
 *
 * NOT suitable for multi-process / serverless deployments —
 * use Redis or a distributed store for production multi-instance setups.
 */

interface RateLimitEntry {
  timestamps: number[];
}

const store = new Map<string, RateLimitEntry>();

/** Clean up stale entries periodically to prevent memory leaks. */
const CLEANUP_INTERVAL_MS = 60_000; // every minute

let cleanupTimer: ReturnType<typeof setInterval> | null = null;

function ensureCleanup(): void {
  if (cleanupTimer !== null) return;
  cleanupTimer = setInterval(() => {
    const now = Date.now();
    const keysToDelete: string[] = [];

    store.forEach((entry, key) => {
      entry.timestamps = entry.timestamps.filter(
        (ts) => now - ts < RATE_LIMIT_WINDOW_MS
      );
      if (entry.timestamps.length === 0) {
        keysToDelete.push(key);
      }
    });

    for (const key of keysToDelete) {
      store.delete(key);
    }
  }, CLEANUP_INTERVAL_MS);

  // Allow the Node.js process to exit even if the timer is still running
  if (typeof cleanupTimer === "object" && "unref" in cleanupTimer) {
    cleanupTimer.unref();
  }
}

const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 10;

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetAt: number; // UNIX ms
}

/**
 * Check whether a request from `key` (e.g., IP) is allowed under the rate limit.
 *
 * Side-effects: records the timestamp if allowed.
 */
export function checkRateLimit(key: string): RateLimitResult {
  ensureCleanup();

  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;

  let entry = store.get(key);

  if (!entry) {
    entry = { timestamps: [] };
    store.set(key, entry);
  }

  // Evict expired timestamps (sliding window)
  entry.timestamps = entry.timestamps.filter((ts) => ts > windowStart);

  if (entry.timestamps.length >= MAX_REQUESTS) {
    const oldest = entry.timestamps[0]!;
    const resetAt = oldest + RATE_LIMIT_WINDOW_MS;
    return {
      allowed: false,
      remaining: 0,
      resetAt,
    };
  }

  entry.timestamps.push(now);

  const remaining = MAX_REQUESTS - entry.timestamps.length;
  const resetAt = entry.timestamps[0]! + RATE_LIMIT_WINDOW_MS;

  return {
    allowed: true,
    remaining,
    resetAt,
  };
}

/**
 * Extract a client identifier from a Request.
 * Prefers `x-forwarded-for` (first value) when behind a proxy,
 * falls back to connection info or a generic fallback.
 */
export function getRateLimitKey(request: Request): string {
  // Check x-forwarded-for header (common behind proxies / Vercel)
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]!.trim();
  }

  // Check x-real-ip (used by some proxies)
  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }

  // Last resort: use a generic fallback
  // In production you'd normally have a proxy that sets one of the above
  return "unknown";
}