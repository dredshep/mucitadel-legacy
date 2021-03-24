module.exports = {
  purge: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"], //,"./public/index.html"],
  theme: {
    colors: {
      mainbg: "#0e0f1f",
      asidebg: "#1b112b",
      inputbg: "#231a2b",
      mupurple: "#9b50ff",
      phantasmablue: "#17b1e8",
      kcalred: "#cf0000",
      white: "#f2f2f2",
      success: "#577c48",
      secondary: "#a58eb9",
      metamask: {
        bg: "#081828",
        text: "#efeff0"
      },
      twitter: "#1da1f2",

      // purple: {
      //   100: "#230026",
      //   200: "#311457",
      //   300: "#452057",
      //   400: "#6004db",
      //   700: "#9b50ff",
      // },
      // blue: {
      //   100: "#190e37",
      // },
      // cyan: "#17b1e8",
      // indigo: {
      //   100: "#dde5da",
      //   200: "#bccbb6",
      //   300: "#9ab091",
      //   400: "#79966d",
      //   500: "#577c48",
      //   600: "#46633a",
      //   700: "#344a2b",
      //   800: "#23321d",
      //   900: "#11190e",
      // },
      extend: {},
    },
      
    screens: {
      'tiny': '355px',
      'xs': '442px',
      'sm': '673px',
      'md': '768px',
      'lg': '1024px',
      'lgish': '1124px',
      'xl': '1248px',
      'xlish': '1281px',
      '2xl': '1536px',
    },
    fontFamily: {
      title: ["Montserrat" /*, "ui-sans-serif"*/],
      body: ["Open Sans"],
    },
  },
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {},
  },
  plugins: [],
};
