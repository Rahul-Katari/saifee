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
      },
      boxShadow: {
        "3xl": "0px 0px 20px 0px rgba(0, 0, 0, 0.75)",
      },
    },
    container: {
      center: true,
    },
  },
  // plugins: [require("@tailwindcss/forms")],
};
