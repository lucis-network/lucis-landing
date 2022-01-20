module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'emerald': '#B1FFF8',
      'emerald-2': '#0BEBD6',
      'total' : '#B1FFF8'
    },
    fontFamily: {
     'transformer': ['SVN-Transformer'],
     'sofia': ['Sofia Sans'],
     'saira': ['Saira'],
    },
    fontSize: {
      '24px': '24px',
      '28px': '28px',
      '32px': '32px',
      '36px': '36px',
      '45px': '45px',
      '48px': '48px',
      '68px': '68px',
      '72px': '72px',
    },
    lineHeight: {
      '28px': '28px',
      '37px': '37px',
      '40px': '40px',
      '50px': '50px',
      '55px': '55px',
    },
    backgroundImage: {
      'gradient-1': 'linear-gradient(99.92deg, #CD28E8 0%, #0BEBD6 100%)',
      'game-card': 'linear-gradient(152.97deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)'
    },
    borderRadius: {
      '8px' : '8px',
      '16px' : '16px',
    },
    extend: {
      width: {
        '80px': '80px',
      },
      spacing: {
        '10px': '10px',
        '15px': '15px',
        '16px': '16px',
        '20px': '20px',
        '28px': '28px',
        '30px': '30px',
        '32px': '32px',
        '100px': '100px',
        '150px': '150px',
        '180px': '180px',
        '200px': '200px',
        '250px': '250px',
        '300px': '300px',
        '500px': '500px',
      }
    },
    container: {
       padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '100px',
      },
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
      },
    }
  },
}
