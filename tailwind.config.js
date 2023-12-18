/** @type {import('tailwindcss').Config} */
//import forms from '@tailwindcss/forms';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'slide-to-right':
          'slide-to-right  .1s cubic-bezier(0.43,-0.04, 0.2, 1) forwards',
        'slide-to-left':
          'slide-to-left  .1s cubic-bezier(0.43,-0.04, 0.2, 1) forwards',
      },
      keyframes: {
        'slide-to-right': {
          '0%': {
            transform: 'w-0',
          },

          '100%': {
            transform: 'w-full',

          },
        },
        'slide-to-left': {
          '0%': {
            transform: 'scaleX(1) ',
          },

          '100%': {
            transform: 'scaleX(0)',
          },
        },
      },
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
