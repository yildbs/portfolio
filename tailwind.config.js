/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      maxWidth: {
        90: "90%",
      },
      colors: {
        content: "#d8dadc", // normal text content color
        title: "#003333", // text title color
        accent: "#3f6382", // icon, numbering for accent
        background: "#a8becf",
        // debug: "#ffff0000", // not showing this color
        debug: "#ffff00FF", //DEBUG
      },
    },
  },
  plugins: [],
};
