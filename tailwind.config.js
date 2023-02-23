import defaultTheme from 'tailwindcss/defaultTheme'
export default {
  theme: {
    fontFamily: {
      'header': ['Amatic SC', 'handwriting']
    },
    extend: {
      colors: {
        primary: defaultTheme.colors.green
      }
    }
  }
}
