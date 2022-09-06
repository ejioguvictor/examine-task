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
    
  },
  plugins: [],
}
