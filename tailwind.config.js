const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      // fontFamily: {
      //   'sans': ['Proxima Nova', ...defaultTheme.fontFamily.sans], aca puedo poner el font que yo quiera por medio de link en google font
      // }
    },
  },
  plugins: [],
}

