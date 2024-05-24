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
        white: "#fff",
        whitesmoke: {
          "100": "#f5f5f5",
          "200": "#eee",
        },
        darkslategray: {
          "100": "#404b52",
          "200": "#1f384c",
          "300": "#273240",
          "400": "#292d32",
        },
        black: "#000",
        blueviolet: "#5932ea",
        silver: "#b5b7c0",
        firebrick: {
          "100": "#d12525",
          "200": "rgba(209, 38, 38, 0.38)",
        },
        mediumaquamarine: "rgba(22, 192, 152, 0.38)",
        mediumseagreen: "#00b087",
        seagreen: "#008767",
        ghostwhite: {
          "100": "#f9fbff",
          "200": "#f1f2f7",
        },
        cornflowerblue: "rgba(112, 127, 221, 0.48)",
        gray: "rgba(8, 36, 49, 0.5)",
        darkslateblue: "#5a67ba",
      },
      spacing: {},
      fontFamily: {
        "body-small-semibold": "Inter",
         poppins: "Poppins",
      },
    },
    fontSize: {
      xs: "12px",
      base: "16px",
      inherit: "inherit",
      "5xs-5": "7.5px",
      "4xs-8": "8.8px",
      "sm-8": "13.8px",
      "2xs": "11px",
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
      mq1325: {
        raw: "screen and (max-width: 1325px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
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
