/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./src/**/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        floatA: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px) translateX(7px)' },
        },
        floatB: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px) translateX(-9px)' },
        },
        floatC: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-13px) translateX(9px)' },
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

