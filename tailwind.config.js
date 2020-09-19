module.exports = {
  purge: ['./src/**/*.svelte'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    colors: {
      green: {
        lightest: '#DADDD8',
        light: '#C7D59F',
        medium: '#B7CE63',
        dark: '#8FB339',
        darkest: '#4B5842',
      },
      white: '#ffffff',
      gray: '#2d3748',
    },
  },
  variants: {
    opacity: ['responsive', 'hover'],
  },
};
