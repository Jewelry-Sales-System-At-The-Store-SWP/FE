/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dimgray: "#70594c",
        whitesmoke: "#faf5f2",
        darkslategray: "#2d2d2d",
        lightgray: "#dccbc2",
      },
      spacing: {},
      fontFamily: {
        "open-sans": "'Open Sans'",
        lato: "Lato",
        cormorant: "Cormorant",
      },
      borderRadius: {
        "17xl": "36px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      lg: "18px",
      "5xl": "24px",
      lgi: "19px",
      inherit: "inherit",
    },
    screens: {
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
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
