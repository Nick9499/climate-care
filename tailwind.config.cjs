/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        bigCaslon: ["Big Caslon"],
        sourceCodePro: ["Source Code Pro"],
      },
    },
  },
  plugins: [require("daisyui")],
};
