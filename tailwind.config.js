const { WebGLArrayRenderTarget } = require("three")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        "custom-gray-100": "#BFBFBF",
        "custom-gray-200": "#ADB5BD",
        "custom-gray-300": "#828282",
        "custom-gray-700": "#232323",
        "custom-gray-900": "#767E90",
        "custom-black-100": "#E5E5E5",
        "custom-black-500": "#202020",
        "custom-brown": "#2C2C2C",
        "custom-orange": "#F87F28",
        "custom-red": "#BB2323",
      },
      letterSpacing: {
        widest: "0.125rem",
      },
      lineHeight: {
        "extra-height": "3.75rem",
      },

      buttom: {
        "bg-custom-red" : "#bb2323",
        "border-custom-orange" : "#f87f28",
      },

      label: {
        "bg-custom-700" : "#232323",
      },

      input: {
        "border-custom-gray-300" : "#828282",
      },

      hr:{
        "text-custom-gray-200" : "#adb5bd",
      },

      fontsize: {
        "h1": "72px",
        "h2": "36px",
        "h3": "18px",
        "h4": "16px",
        "h6": "12px",
        "title": "12px",
        "paragraph" : "16px",
        "paragraph2": "14px",
        "paratemoin": "21px",
        "titlefullstack": "14px",
        "buttom": "14px",
        "span": "14px",
        "contactinfo": "24px",
        "labelcontact" : "14px",
      },
    },
  },
  plugins: [],
};