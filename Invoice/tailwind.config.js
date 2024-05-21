/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "disco-jupiter-primary-primary-200": "var(--disco-jupiter-primary-primary-200)",
        "disco-jupiter-primary-primary-400": "var(--disco-jupiter-primary-primary-400)",
        "disco-jupiter-primary-primary-50": "var(--disco-jupiter-primary-primary-50)",
        "disco-jupiter-primary-primary-500": "var(--disco-jupiter-primary-primary-500)",
        "neutralneutral-100": "var(--neutralneutral-100)",
        "neutralneutral-200": "var(--neutralneutral-200)",
        "neutralneutral-25": "var(--neutralneutral-25)",
        "neutralneutral-400": "var(--neutralneutral-400)",
        "neutralneutral-50": "var(--neutralneutral-50)",
        "neutralneutral-500": "var(--neutralneutral-500)",
        "neutralneutral-700": "var(--neutralneutral-700)",
        "neutralneutral-800": "var(--neutralneutral-800)",
        "primaryprimary-500": "var(--primaryprimary-500)",
        "primitives-raw-values-colors-neutral-100": "var(--primitives-raw-values-colors-neutral-100)",
        "primitives-raw-values-colors-neutral-200": "var(--primitives-raw-values-colors-neutral-200)",
        "primitives-raw-values-colors-neutral-200-duplicate":
          "var(--primitives-raw-values-colors-neutral-200-duplicate)",
        "primitives-raw-values-colors-neutral-25": "var(--primitives-raw-values-colors-neutral-25)",
        "primitives-raw-values-colors-neutral-300": "var(--primitives-raw-values-colors-neutral-300)",
        "primitives-raw-values-colors-white-100": "var(--primitives-raw-values-colors-white-100)",
        "white-100": "var(--white-100)",
      },
      fontFamily: {
        "d2-regular": "var(--d2-regular-font-family)",
        "d3-regular": "var(--d3-regular-font-family)",
        "d4-medium": "var(--d4-medium-font-family)",
        "d4-regular": "var(--d4-regular-font-family)",
        "d4-semibold": "var(--d4-semibold-font-family)",
        "d5-bold": "var(--d5-bold-font-family)",
        "d5-medium": "var(--d5-medium-font-family)",
        "d6-bold": "var(--d6-bold-font-family)",
        "d6-semibold": "var(--d6-semibold-font-family)",
        "d8-semibold": "var(--d8-semibold-font-family)",
        h5: "var(--h5-font-family)",
      },
      boxShadow: {
        "focus-primay-focus-3px": "var(--focus-primay-focus-3px)",
      },
    },
  },
  plugins: [],
};
