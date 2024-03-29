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
      sm: "380px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1500px",
    },
    extend: {
      fontFamily: {
        sans: [
          "RlBasisGrotesque",
          "Avenir",
          "Helvetica Neue",
          "Helvetica",
          "sans-serif",
        ], // Use the font name you want
        headerFont: [
          "RlFreight",
          "HoeflerText-Black",
          "Times New Roman",
          "serif",
        ],
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
