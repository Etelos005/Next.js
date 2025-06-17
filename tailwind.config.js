module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1E2A38',       
          dark: '#16202A',          
          light: '#EEF2F5',         
          accent: '#FBBF24',        
          text: '#DDE3EA',          
        }
      }
    }
  },
  plugins: [],
}
