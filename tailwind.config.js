/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--primary))',
        secondary: 'hsl(var(--secondary))',
        accent: 'hsl(var(--accent))',
        background: 'hsl(var(--background))',
        default: 'hsl(var(--default))',
      },
      fontFamily: {
        roboto: 'var(--font-roboto)',
        poppins: 'var(--font-poppins)',
      },
    },
  },
  plugins: [],
}
