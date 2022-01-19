module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'emerald' : '#B1FFF8',
      'total' : '#B1FFF8'
    },
    fontFamily: {
     'transformer': ['SVN-Transformer Bold'],
     'sofia': ['Sofia Sans'],
    },
    fontSize: {
      '24px': '24px',
      '32px': '32px',
      '36px': '36px',
      '48px': '48px',
      '68px': '68px',
    },
    lineHeight: {
      '28px': '28px',
      '37px': '37px',
      '55px': '55px',
    },
    backgroundImage: {
      'gradient-1': 'linear-gradient(99.92deg, #CD28E8 0%, #0BEBD6 100%)',
      'game-card': 'linear-gradient(#FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(#9854FE 0%, rgba(152, 84, 254, 0) 100%), linear-gradient(#151515 0%, rgba(21, 21, 21, 0) 100%)'
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
        '20px': '20px',
      }
    },
  },
  plugins: [],
}
