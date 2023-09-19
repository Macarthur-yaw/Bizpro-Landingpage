/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors:{
'indi':'#060640',
'lightblue':{100:'#ECF9FF',
200:'#ADD8E6'},
'gold':'#FFBF00'
     },
      padding:{
        '2':'4px',
        '4':'6px',
        '6':'8px'


      },
      
      
    },
  },
  plugins: [],
}

