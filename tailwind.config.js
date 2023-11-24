/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    './components/**/*.{html,js}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'nuvem': "url('assets/images/nuvem.png')",
      },
    },
  },
  plugins: [],
}

