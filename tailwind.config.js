/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'primary-color': '#562E69',
      'examine-gray': '#6C757D',
      'trial-bg': 'rgba(37, 161, 175, 0.1)',
      'trial-text': '#1B818C',
      
    },
    screens: {
      'none': '0px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... } 
      'md': '768px',

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily : {
      laro : ['Laro', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
}
