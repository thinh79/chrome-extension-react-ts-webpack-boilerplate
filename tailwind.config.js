/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust the path according to your project structure
    // Include any other paths that might contain Tailwind classes, 
    // such as your HTML files
    './public/**/*.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
