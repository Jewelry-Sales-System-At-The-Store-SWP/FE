module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
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
        poppins: "Poppins",
      },
      borderRadius: {
        "lg-8": "18.8px",
        "10xs-5": "2.5px",
        "6xs-3": "6.3px",
        "8xs": "5px",
      },
    },
    fontSize: {
      "5xs-5": "7.5px",
      "4xs-8": "8.8px",
      "sm-8": "13.8px",
      xs: "12px",
      "2xs": "11px",
      inherit: "inherit",
    },
    screens: {
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