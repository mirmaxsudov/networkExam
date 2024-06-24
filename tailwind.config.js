/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-background": "#fafafa",
        dimgray: "#525252",
        "base-white": "#fff",
        goldenrod: "#ebc136",
        "base-card": "#f3f2f2",
        "brand-purple-dark": "#4b2995",
        "base-button": "#e6e5e5",
        "base-title": "#272221",
        "base-text": "#574f4d",
        "base-label": "#8d8686",
        "base-subtitle": "#403937",
        "brand-yellow-light": "#f1e9c9",
        "brand-yellow-dark": "#c47f17",
        "brand-purple": "#8047f8",
        "brand-yellow": "#dbac2c",
        "brand-purple-light": "#ece5f9",
        "base-input": "#ededed",
      },
      spacing: {},
      fontFamily: {
        "title-title-s": "'Baloo 2'",
        "text-regular-m": "Roboto",
      },
      borderRadius: {
        "17xl": "36px",
        "81xl": "100px",
        "981xl": "1000px",
        "25xl": "44px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      "5xl": "24px",
      lgi: "19px",
      base: "16px",
      xl: "20px",
      "3xs": "10px",
      "13xl": "32px",
      "7xl": "26px",
      "29xl": "48px",
      "19xl": "38px",
      "10xl": "29px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      mq1325: {
        raw: "screen and (max-width: 1325px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq925: {
        raw: "screen and (max-width: 925px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
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
