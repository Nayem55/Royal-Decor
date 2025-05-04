/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ffffff",

          secondary: "#035A6F",

          accent: "#FDFCE5",

          perfume: "#ff8673",
          
          bodyspray: "#95D4E9",

          airfreshner: "#FD9CB1",

          privatelabel: "#C2E76B",

          whitelabel: "#C5B4E2",

          contract: "#FFB800",

          neutral: "#191D24",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#f62e36",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
