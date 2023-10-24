/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,tsx}'],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
        },
      },
      backgroundColor: {
        skin: {
          fill: 'var(--color-fill)',
        },
      },
      gridTemplateColumns: {
        product: '4fr 2fr 2fr 2fr 2fr 3.2rem',
      },
    },
  },
  plugins: [],
};
