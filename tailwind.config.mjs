/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cwc: {
          bg:           '#0c0b09',
          surface:      '#161410',
          'surface-2':  '#1e1c18',
          border:       '#2e2b25',
          text:         '#ede9e0',
          muted:        '#8a8278',
          accent:       '#c9a28a',
          'accent-dark':'#a8856f',
          sage:         '#6b9080',
          'sage-dark':  '#4a6b5a',
        },
      },
      fontFamily: {
        serif:  ['Playfair Display', 'Georgia', 'serif'],
        sans:   ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
    },
  },
  plugins: [],
};
