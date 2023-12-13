/** @type {import('tailwindcss').Config} */
//import forms from '@tailwindcss/forms';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
};
