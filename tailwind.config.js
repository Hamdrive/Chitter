module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        0.3: "0 0 30%",
        0.4: "0 0 40%",
        0.2: "0 0 20%",
        0.5: "0 0 50%",
        0.6: "0 0 60%",
        0.7: "0 0 70%",
        0.8: "0 0 80%",
        0.1: "0 0 10%",
        0.15: "0 0 15%",
        0.25: "0 0 25%",
      },
      ml: {
        18: "4.5rem",
      },
      screens: {
        lg2: "1152px",
      },
      backgroundImage: {
        "landingimg": "url('../src/images/bg-landingpage.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
