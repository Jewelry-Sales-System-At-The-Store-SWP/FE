/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        firebrick: {
          100: "#d12525",
          200: "rgba(209, 38, 38, 0.38)",
        },
        tomato: {
          100: "#f74d4d",
          200: "rgba(247, 77, 77, 0.38)",
        },
        mediumseagreen: "#00b087",
        mediumaquamarine: {
          100: "#1ac9a1",
          200: "rgba(22, 192, 152, 0.38)",
        },
        seagreen: {
          100: "#008767",
          200: "rgba(0, 166, 128, 0.38)",
        },
        gray: {
          DEFAULT: "rgba(8, 36, 49, 0.5)",
          100: "#18020c",
          200: "rgba(255, 255, 255, 0.4)",
          300: "rgba(24, 2, 12, 0.4)",
          400: "rgba(0, 0, 0, 0.05)",
          500: "rgba(24, 2, 12, 0.3)",
          600: "rgba(24, 2, 12, 0.05)",
          700: "#a6a6a6",
        },
        "greyscale-100": "#f1f5f9",
        "greyscale-900": "#0f172a",
        "secondary-glamour-pink-500-base": "#ed4f9d",
        "additional-white": "#fff",
        aliceblue: "#e2e8f0",
        "greyscale-500": "#64748b",
        "greyscale-50": "#f8fafc",
        "colors-white-100": "#fff",
        "primary-primary-50": "#f0ebff",
        "primary-primary-500": "#7341fb",
        "neutral-neutral-800": "#363c45",
        "neutral-neutral-500": "#737982",
        "neutral-neutral-25": "#fbfcfe",
        "neutral-neutral-100": "#eff2f5",
        "neutral-neutral-50": "#f5f7fa",
        "neutral-neutral-200": "#e2e5e9",
        gainsboro: "#e0e3e3",
        lightgray: {
          DEFAULT: "#dccbc2",
          100: "#cfd1d4",
        },
        whitesmoke: {
          DEFAULT: "#eee",
          100: "#f5f5f5",
          200: "#eee",
        },
        "primary-primary-400": "#895ffc",
        "colors-neutral-200": "#e8eaed",
        "colors-neutral-25": "#fbfcfd",
        darkslategray: {
          DEFAULT: "#2d2d2d",
          100: "#404b52",
          200: "#1f384c",
          300: "#273240",
          400: "#292d32",
        },
        blueviolet: "#5932ea",
        silver: "#b5b7c0",
        ghostwhite: {
          100: "#f9fbff",
          200: "#f1f2f7",
        },
        cornflowerblue: "rgba(112, 127, 221, 0.48)",
        darkslateblue: "#5a67ba",
        dimgray: {
          DEFAULT: "#70594c",
          100: "#4a3640",
          200: "rgba(99, 75, 102, 0.05)",
        },
        blanchedalmond: "#ffe6cc",
        lightslategray: {
          100: "#9590a8",
          200: "rgba(149, 144, 168, 0.1)",
        },
      },
      spacing: {
        62.5: "250px",
        75: "265px",
      },
      fontFamily: {
        poppins: "Poppins",
        roboto: "Roboto",
        satoshi: "Satoshi",
        abeezee: "ABeeZee",
        "d8-semibold": "Inter",
        "open-sans": "'Open Sans'",
        lato: "Lato",
        cormorant: "Cormorant",
        "body-small-semibold": "Inter",
      },
      borderRadius: {
        "10xs-5": "2.5px",
        "lg-8": "18.8px",
        "6xs-3": "6.3px",
        "8xs": "5px",
        "border-radius-br4": "4px",
        "10xs": "3px",
        "17xl": "36px",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      xs: "12px",
      sm: "14px",
      lg: "18px",
      xl: "20px",
      "13xl": "32px",
      "5xs-5": "7.5px",
      "4xs-8": "8.8px",
      "sm-8": "13.8px",
      "2xs": "11px",
      inherit: "inherit",
    },
    screens: {
      mq525: {
        raw: "screen and (max-width: 525px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq650: {
        raw: "screen and (max-width: 650px)",
      },
      mq1325: {
        raw: "screen and (max-width: 1325px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
