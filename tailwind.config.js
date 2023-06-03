/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    screens: {
      sm: "350px",
      md: "668px",
      lg: "980px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        public: ["'Public Sans', sans-serif"],
      },
      colors: {},
    },
  },
  plugins: [
    // ...
    function ({ addUtilities }) {
      addUtilities({
        ".hide-scroll-bar": {
          scrollbarWidth: "none",
          "-ms-overflow-style": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    },
  ],
};
