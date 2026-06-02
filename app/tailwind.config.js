/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "var(--c-ivory)",
        cream: "var(--c-cream)",
        sage: "var(--c-sage)",
        eucalyptus: "var(--c-eucalyptus)",
        botanical: "var(--c-botanical)",
        forest: "var(--c-forest)",
        olive: "var(--c-olive)",
        champagne: "var(--c-champagne)",
        ink: "var(--c-ink)",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "serif"],
        serif: ['"Cormorant Garamond"', "serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
        script: ['"Italianno"', "cursive"],
      },
    },
  },
  plugins: [],
};
