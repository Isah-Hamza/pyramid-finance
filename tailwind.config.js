/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#007AFF",
        "secondary-brown": "#2D3748",
        "border-color": "#D1D1D1",
        "custom-blue": "#007AFF",
      },
    },
  },
  plugins: [],
};
