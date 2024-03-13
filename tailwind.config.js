/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "nav-highlight": "var(--nav-highlight-color)",
        highlight: "var(--highlight)",
        theme: "var(--theme)",
        "footer-highlight": "var(--footer-highlight)",
        banner: "var(--banner-bg)",
        content: "var(--content)",
      },
      boxShadow: {
        "3xl": "6px 6px 18px 0px rgba(0,0,0,0.3);",
      },
      backgroundImage: {
        "theme-gradient":
          "linear-gradient(180deg, #07869B 0%, #0361AD 100%) !important;",
      },
    },
    container: {
      center: true,
    },
  },
  // plugins: [require("@tailwindcss/forms")],
};
