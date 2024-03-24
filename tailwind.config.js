/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { /* Dracula colours: https://draculatheme.com/contribute */
        transparent: "transparent",
        background: "#282A36",
        dark: "#44475A", /* aka 'current line' */
        light: "#6272A4", /* aka 'comment' */
        foreground: "#F8F8F2",
        purple: "#BD93F9",
        pink: "#FF79C6",
        red: "#FF5555",
        orange: "#FFB86C",
        yellow: "#F1FA8C",
        green: "#50FA7B",
        cyan: "#8BE9FD",
      },
      transitionProperty: {
        "width": "width",
      },
    },
  },
  plugins: [],
}

