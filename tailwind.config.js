/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node-modules/flowbite-react/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quickSand : ["Quicksand", "sans-serif"]
      }
    },
  },
  plugins: [require('flowbite/plugin'), require('daisyui')],
}

