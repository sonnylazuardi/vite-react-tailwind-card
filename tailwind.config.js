module.exports = {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        tilt: {
          '0%': { transform: 'rotateY(45deg)' },
          '50%': { transform: 'rotateY(-45deg)' },
          '100%': { transform: 'rotateY(45deg)' },
        },
        'rise-up': {
          '0%': {
            transform: 'translate(-50%, 100%) rotateY(0deg)',
            opacity: '0',
          },
          '100%': {
            transform: 'translate(-50%, -50%) rotateY(360deg)',
            opacity: '1',
          },
        },
        'fall-down': {
          '0%': {
            transform: 'translate(-50%, -50%) rotateY(0deg)',
            opacity: '1',
          },
          '100%': {
            transform: 'translate(-50%, 100%) rotateY(-360deg)',
            opacity: '0',
          },
        },
      },
      animation: {
        tilt: 'tilt 8s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite',
        'rise-up': 'rise-up 1.8s cubic-bezier(0.05, 0.7, 0.1, 1) forwards',
        'fall-down': 'fall-down 0.8s ease-in forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
