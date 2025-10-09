/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#b9e5fe',
          300: '#7cd1fd',
          400: '#36bffa',
          500: '#0ca6eb',
          600: '#0284c7',
          700: '#036ba1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        ice: {
          50: '#f8fafc',
          100: '#edf3f8',
          200: '#dbe7f3',
          300: '#c9dbed',
          400: '#b7cfe8',
          500: '#a5c3e3',
          600: '#93b7de',
          700: '#81abd9',
          800: '#6f9fd4',
          900: '#5d93cf',
        },
        rink: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
        'display': ['Orbitron', 'sans-serif'], // Modern, sporty font for headlines
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'puck-slide': 'puckSlide 10s linear infinite',
        'ice-shine': 'iceShine 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        puckSlide: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        iceShine: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      backgroundImage: {
        'hockey-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm13.312 0l8.485 8.485-1.414 1.414-7.9-7.9h.828zm-9.9 0l7.9 7.9-1.415 1.415-7.9-7.9h1.414zm6.486 0l7.9 7.9-1.414 1.415-7.9-7.9h1.414zM34.3 0l7.9 7.9-1.414 1.415-7.9-7.9h1.414zm-6.487 0l7.9 7.9-1.414 1.415-7.9-7.9h1.414zM27.816 0l7.9 7.9-1.414 1.415-7.9-7.9h1.414zM30 0l7.9 7.9-1.414 1.415-7.9-7.9H30zm-2.184 0l7.9 7.9-1.414 1.415-7.9-7.9h1.414zM32.184 0l7.9 7.9-1.414 1.415-7.9-7.9h1.414zM34.367 0l7.9 7.9-1.414 1.415-7.9-7.9h1.414zM36.55 0l7.9 7.9-1.414 1.415-7.9-7.9h1.414zM38.734 0l7.9 7.9-1.414 1.415-7.9-7.9h1.414zM40.917 0l7.9 7.9-1.414 1.415-7.9-7.9h1.414zM43.1 0l7.9 7.9-1.414 1.415-7.9-7.9h1.414zM45.283 0l7.9 7.9-1.414 1.415-7.9-7.9h1.414zM47.466 0l7.9 7.9-1.414 1.415-7.9-7.9h1.414zM49.65 0l7.9 7.9-1.414 1.415-7.9-7.9h1.414zM51.833 0l7.9 7.9-1.414 1.415-7.9-7.9h1.414zM54.016 0l7.9 7.9-1.414 1.415-7.9-7.9h1.414zM56.2 0l7.9 7.9-1.414 1.415-7.9-7.9h1.414zM58.383 0l7.9 7.9-1.414 1.415-7.9-7.9h1.414z' fill='%23a5c3e3' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
        'ice-texture': "linear-gradient(135deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%, transparent)",
      },
    },
  },
  plugins: [],
}