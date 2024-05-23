/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "greyscale-100": "#f1f5f9",
        "greyscale-900": "#0f172a",
        "secondary-glamour-pink-500-base": "#ed4f9d",
        "additional-white": "#fff",
        aliceblue: "#e2e8f0",
        "greyscale-500": "#64748b",
        "greyscale-50": "#f8fafc",
      },
      spacing: {},
      fontFamily: {
        "body-small-semibold": "Inter",
      },
    },
    fontSize: {
      xs: "12px",
      base: "16px",
      inherit: "inherit",
    },
    screens: {
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq650: {
        raw: "screen and (max-width: 650px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
