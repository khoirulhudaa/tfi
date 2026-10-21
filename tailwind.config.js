export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
        body: ["Figtree", "system-ui", "sans-serif"],
      },
      colors: { ink: "#0F1E2A", paper: "#F5F6F2", teal: { DEFAULT: "#0E7C86", dark: "#0A5C64" }, dye: "#E8734A" },
    },
  },
  plugins: [],
};
