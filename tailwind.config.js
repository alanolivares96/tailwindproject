/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'verde-oscuro': '#015248',
        'gris-claro': '#333333',
        'gris': '#A1A1A1',
        'amarillo-claro': '#F2CA7F',
        'amarillo-fuerte': '#F5B546',
        'naranja': '#FA991C',
        'gris-fondo': '#F9F7F7',
        'naranja-amarillo': '#FFB85A',
        'amarillo-bg': '#FFF8F0',
        'verde-claro-bg': '#B4D5D1'
      },
      backgroundImage: {
        'hero': "url('/img/background_banner@2x.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }

    },
  },
  plugins: [],
}

