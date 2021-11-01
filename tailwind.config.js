module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: {
          yellow: "#fca311",
          darkgray: "#3d405b",
          lightyellow: "#fca21146",
          blue: {
            100: "#002333a1",
            200: "#002333",
            300: "#0077b6",
            400: "#4361ee",
          },
          red: {
            100: "#e6394736",
          },
          purple: {
            100: "#f77f00",
          },
        },
      },

      height: {
        "95vh": "95vh",
        553: "553px",
      },

      fontFamily: {
        noto: ["Noto Serif", "serif"],
        ceviche: ["Ceviche One", "cursive"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
