/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/*.{html,js}"], // Correct placement of content
    theme: {
      extend: {},
      daisyui: {
        themes: [
          {
            mytheme: {
              neutral: "#bebebe",
            },
          },
        ],
      },
    },
    plugins: [require("daisyui"), require("taos/plugin")], // Plugins should be outside 'theme'
    safelist: [
      "!duration-[0ms]",
      "!delay-[0ms]",
      'html.js :where([class*="taos:"]:not(.taos-init))',
    ],
    daisyui: {
      themes: [
        {
          mytheme: {
            neutral: "#bebebe",
          },
        },
      ],
    },
    content: {
      relative: true,
      transform: (content) => content.replace(/taos:/g, ""),
      files: ["./src/*.{html,js}"],
    },
  };
  