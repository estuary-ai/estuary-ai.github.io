/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./src/**/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        floatA: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-7px) translateX(3px)' },
        },
        floatB: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px) translateX(-5px)' },
        },
        floatC: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px) translateX(4px)' },
        },
      },
      animation: {
        floatA: 'floatA 4.1s ease-in-out infinite',
        floatB: 'floatB 5.3s ease-in-out infinite',
        floatC: 'floatC 4.9s ease-in-out infinite',
      },
    }
  },
  plugins: [],
}

