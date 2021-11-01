module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      height: {
        "95vh": "95vh",
      },

      // backgroundImage: {
      //   "hero-image": "url('./images/header.jpg')",
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
