const { headerHeight } = require("./theme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { primaryColor: "#324766", secondaryColor: "#324766" },
      spacing: { headerHeight: headerHeight + "px" },
    },
  },
  plugins: [],
};
