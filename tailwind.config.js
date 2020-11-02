const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Merriweather", ...defaultTheme.fontFamily.serif],
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
        cormorant: ["Cormorant", ...defaultTheme.fontFamily.serif],
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  variants: {},
  plugins: [],
}
