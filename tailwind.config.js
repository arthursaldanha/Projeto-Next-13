/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0052BF",

        "gray-25": "#FCFCFD",
        "gray-50": "#F9FAFB",
        "gray-100": "#F2F4F7",
        "gray-200": "#EAECF0",
        "gray-300": "#D0D5DD",
        "gray-400": "#98A2B3",
        "gray-500": "#667085",
        "gray-600": "#475467",
        "gray-700": "#344054",
        "gray-800": "#1D2939",
        "gray-900": "#101828",
        
        "error-25": "#FFFBFA",
        "error-50": "#FEF3F2",
        "error-100": "#FEE4E2",
        "error-200": "#FECDCA",
        "error-300": "#FDA29B",
        "error-400": "#F97066",
        "error-500": "#F04438",
        "error-600": "#D92D20",
        "error-700": "#B42318",
        "error-800": "#912018",
        "error-900": "#7A271A",

        "gray_blue-25": "#FCFCFD",
        "gray_blue-50": "#F8F9FC",
        "gray_blue-100": "#EAECF5",
        "gray_blue-200": "#D5D9EB",
        "gray_blue-300": "#B3B8DB",
        "gray_blue-400": "#717BBC",
        "gray_blue-500": "#4E5BA6",
        "gray_blue-600": "#3E4784",
        "gray_blue-700": "#363F72",
        "gray_blue-800": "#293056",
        "gray_blue-900": "#101323",

        "gray_modern-25": "#FCFCFD",
        "gray_modern-50": "#F8FAFC",
        "gray_modern-100": "#EEF2F6",
        "gray_modern-200": "#E3E8EF",
        "gray_modern-300": "#CDD5DF",
        "gray_modern-400": "#9AA4B2",
        "gray_modern-500": "#697586",
        "gray_modern-600": "#4B5565",
        "gray_modern-700": "#364152",
        "gray_modern-800": "#202939",
        "gray_modern-900": "#121926",
        
        "green-25": "#F6FEF9",
        "green-50": "#EDFCF2",
        "green-100": "#D3F8DF",
        "green-200": "#AAF0C4",
        "green-300": "#73E2A3",
        "green-400": "#3CCB7F",
        "green-500": "#16B364",
        "green-600": "#099250",
        "green-700": "#087443",
        "green-800": "#095C37",
        "green-900": "#084C2E",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        nunito: ["var(--font-nunito)"],
      },
      keyframes: {
        // Tooltip
        "slide-up-fade": {
          "0%": { opacity: 0, transform: "translateY(2px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-right-fade": {
          "0%": { opacity: 0, transform: "translateX(-2px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        "slide-down-fade": {
          "0%": { opacity: 0, transform: "translateY(-2px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-left-fade": {
          "0%": { opacity: 0, transform: "translateX(2px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        // Tooltip
        "slide-up-fade": "slide-up-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-right-fade":
          "slide-right-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade": "slide-down-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-left-fade": "slide-left-fade 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      willChange: {
        opacity: "opacity",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-radix")()],
};

// sm	640px	@media (min-width: 640px)
// md	768px	@media (min-width: 768px)
// lg	1024px	@media (min-width: 1024px)
// xl	1280px	@media (min-width: 1280px)
// 2xl	1536px	@media (min-width: 1536px)