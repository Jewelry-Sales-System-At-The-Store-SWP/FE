/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#18020c",
          "200": "rgba(255, 255, 255, 0.4)",
          "300": "rgba(24, 2, 12, 0.4)",
          "400": "rgba(0, 0, 0, 0.05)",
          "500": "rgba(24, 2, 12, 0.3)",
          "600": "rgba(24, 2, 12, 0.05)",
        },
        dimgray: {
          "100": "#4a3640",
          "200": "rgba(99, 75, 102, 0.05)",
        },
        darkslategray: "#1f384c",
        blanchedalmond: "#ffe6cc",
        lightslategray: {
          "100": "#9590a8",
          "200": "rgba(149, 144, 168, 0.1)",
        },
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        satoshi: "Satoshi",
        abeezee: "ABeeZee",
      },
      borderRadius: {
        "10xs": "3px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      base: "16px",
      inherit: "inherit",
    },
    screens: {
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
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
