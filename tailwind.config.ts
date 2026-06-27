const config = {
  theme: {
    extend: {
      colors: {
        // === Base ===
        ink: "#06070A",
        paper: "#F6F7FB",

        // === Text ===
        "txt-1": "#0A0B0F",
        "txt-inv": "#F4F5F8",
        "txt-inv-2": "#A9AEC0",
        "txt-2": "#7B7F8C",

        // === Accent ===
        accent: "#5B6CFF",

        // === Section accents ===
        violet: "#7C3AED",
        cyan: "#06B6D4",
        emerald: "#10B981",
        amber: "#F59E0B",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        glass: "22px",
      },
      boxShadow: {
        glass:
          "0 8px 40px rgba(10,12,20,.10), inset 0 1px 0 rgba(255,255,255,.45)",
        "glass-dark":
          "0 12px 50px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.10)",
      },
      animation: {
        "reveal-up": "revealUp 0.8s cubic-bezier(.22,.61,.36,1) forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "counter-up": "counterUp 1.2s cubic-bezier(.22,.61,.36,1) forwards",
      },
      keyframes: {
        revealUp: {
          from: { opacity: "0", transform: "translateY(34px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        counterUp: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
};

export default config;
