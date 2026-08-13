/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#05070a',
          900: '#0a0e14',
          850: '#0d1219',
          800: '#111826',
          700: '#182233',
          600: '#25324a',
          500: '#3a4a66',
        },
        accent: {
          green: '#39ff88',
          cyan: '#5ee6ff',
          amber: '#ffb454',
          pink: '#ff6ac1',
          violet: '#b39dff',
        },
      },
      backgroundImage: {
        'dot-grid':
          'radial-gradient(circle, rgba(94,230,255,0.14) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-grid': '24px 24px',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        blink: 'blink 1s steps(1) infinite',
        scanline: 'scanline 6s linear infinite',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
        glowPulse: 'glowPulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
