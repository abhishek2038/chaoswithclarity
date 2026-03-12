/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cwc: {
          bg:            '#f2e8dc',
          'bg-alt':      '#ece3d5',
          surface:       '#e3d8c8',
          'surface-2':   '#ddd0be',
          border:        '#cfc3b0',
          text:          '#1c1814',
          muted:         '#7a7268',
          dim:           '#a09888',
          accent:        '#9a7058',
          'accent-warm': '#c9a28a',
          sage:          '#3d6458',
          'sage-light':  '#6b9080',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
    },
  },
  plugins: [],
};
