module.exports = {
  mode: "jit",
  purge: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules//@fouita/data-table/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: "#053876",
        secondary: "#007acc",
        highlight: "#faae3d",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
