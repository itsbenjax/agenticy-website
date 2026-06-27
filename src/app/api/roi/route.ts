import { type NextRequest } from "next/server";
import { handleRoiCalculation } from "@/lib/roi-calculator";
import { checkRateLimit, getRateLimitKey } from "@/lib/rate-limit";

export async function POST(request: NextRequest): Promise<Response> {
  // ── Rate limiting ────────────────────────────────────────────────
  const rateLimitKey = getRateLimitKey(request);
  const rateLimitResult = checkRateLimit(rateLimitKey);

  if (!rateLimitResult.allowed) {
    return Response.json(
      {
        success: false,
        message: "Demasiadas solicitudes. Inténtalo de nuevo más tarde.",
      },
      {
        status: 429,
        headers: {
          "Retry-After": String(
            Math.ceil((rateLimitResult.resetAt - Date.now()) / 1000)
          ),
          "X-RateLimit-Remaining": "0",
          "X-RateLimit-Reset": String(rateLimitResult.resetAt),
        },
      }
    );
  }

  // ── Parse body ───────────────────────────────────────────────────
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      {
        success: false,
        message: "Cuerpo de la solicitud inválido. Debe ser JSON válido.",
      },
      { status: 400 }
    );
  }

  // ── Process ──────────────────────────────────────────────────────
  const result = handleRoiCalculation(body);

  const status = result.success ? 200 : 422;
  const responseBody: Record<string, unknown> = {
    success: result.success,
  };

  if (result.data) {
    responseBody.data = result.data;
  }
  if (result.message) {
    responseBody.message = result.message;
  }
  if (result.errors) {
    responseBody.errors = result.errors;
  }

  return Response.json(responseBody, {
    status,
    headers: {
      "X-RateLimit-Remaining": String(rateLimitResult.remaining),
      "X-RateLimit-Reset": String(rateLimitResult.resetAt),
    },
  });
}

/**
 * Reject all non-POST methods.
 */
export async function GET(): Promise<Response> {
  return Response.json(
    { success: false, message: "Method not allowed. Use POST." },
    { status: 405 }
  );
}

export async function PUT(): Promise<Response> {
  return Response.json(
    { success: false, message: "Method not allowed. Use POST." },
    { status: 405 }
  );
}

export async function PATCH(): Promise<Response> {
  return Response.json(
    { success: false, message: "Method not allowed. Use POST." },
    { status: 405 }
  );
}

export async function DELETE(): Promise<Response> {
  return Response.json(
    { success: false, message: "Method not allowed. Use POST." },
    { status: 405 }
  );
}

export async function HEAD(): Promise<Response> {
  return new Response(null, { status: 405 });
}