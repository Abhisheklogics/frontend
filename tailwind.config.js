/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      'sm':'640px',
      // =>\ @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend:{
      screens:{
      'xs':{'min':'310px' ,'max':'520px'}
    }
    }
  },
  plugins: [],
}

