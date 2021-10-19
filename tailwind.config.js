// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          
          yellow:           
{
  50: '#fffbdb',
  100: '#fff3af',
  200: '#ffea7e',
  300: '#ffe24d',
  400: '#ffda1e',
  500: '#e6c007',
  600: '#b39500',
  700: '#806b00',
  800: '#4d4000',
  900: '#1c1500',
},

navCol: 


{
  50: '#edf0fd',
  100: '#ced3e5',
  200: '#afb6cf',
  300: '#9099bb',
  400: '#707ba7',
  500: '#57628e',
  600: '#444c6f',
  700: '#303650',
  800: '#1c2132',
  900: '#080b17',
}
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }