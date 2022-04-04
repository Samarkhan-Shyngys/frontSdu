module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        assistant: "url('/src/image/img_teacher.png')",
      },
      gridTemplateColumns: {
        sidebar: "300px 1fr",
      },
      height: {
        '128': '32rem',
      }
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
