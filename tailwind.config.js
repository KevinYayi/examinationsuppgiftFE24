/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"], // Defines the content paths correctly
  theme: {
    extend: {
      fontFamily: {
        dmfont: ["DM Serif Text", "sans-serif"], // Custom font
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          neutral: "#bebebe", // Custom theme color
        },
      },
    ],
  },
  plugins: [
    require("daisyui"), // Plugins are correctly placed outside 'theme'
    require("taos/plugin"),
  ],
  safelist: [
    "!duration-[0ms]",
    "!delay-[0ms]",
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ""), // Transforms the content
  },
};
