module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        assistant: "url('/src/image/img_teacher.png')",
      },
      colors: {
        text_main: "#08033A",
        text_gray: "#77838F",
        main_red : "#9E2629",
        blue: "#256699",
      },
      gridTemplateColumns: {
        sidebar: "300px 1fr",
        course: "800px, 550px",
        mobilesidebar: "10px, 1fr",
      
      },
      height: {
        '128': '32rem',
      },
      opacity: ['disabled']

    },
  },
  plugins: [
      require("@tailwindcss/line-clamp"),
      require('tailwind-scrollbar-hide')
    ],
};
