/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        customLight: '0px 0px 20px rgba(0, 0, 0, 0.09)',
        customDark: '0px 0px 20px rgba(0, 0, 0, 0.2)',
      },
      maxWidth:{
        conatiner: "1440px",
        contentContainer: "1140px",
        containerSmall: "1024px",
        containerxs:"768px",
      },
      fontFamily:{
        titleFont: ['Inter', 'sans-serif'],
        bodyFont:['Monsterrat', 'sans-serif'],
      },
      fontWeight:{
        thin:200,
        light:400,
        bold:500,
        bolder:700,
        boldest:900
      },
      colors:{
        bodyColor: '#0A192F',
        textGreen: '#64FFDA',
        textBlue: '#00ADB5',
        textDark: '#8892B0',
        textLight:'#CCD6F6',
        hoverColor: 'rgba(100, 255, 218, 0.1)',
      },
      screens :{
        xs: '320px',
        sm: '350px',
        sml: '500px',
        md: '667px',
        mdl: '768px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
