"use strict";

module.exports = {
  purge: [],
  theme: {
    extend: {
      inset: {
        '1': '1rem',
        '1-2': '1.2rem',
        '2': '2rem',
        '3': '3rem',
        '4': '4rem',
        '5': '5rem',
        '6': '6rem',
        '7': '7rem',
        '8': '8rem',
        '9': '9rem',
        '23': '23rem',
        '50': '50%',
        'n1': '-1rem'
      },
      colors: {
        'primary': '#377DFF'
      },
      margin: {
        '72': '18rem',
        'n72': '-18rem',
        'n64': '-16rem',
        'n56': '-14rem',
        'n48': '-12rem',
        'n45': '-11rem',
        'n40': '-10rem',
        'n10': '-2.5rem'
      },
      width: {
        '72': '18rem',
        'n72': '-18rem',
        'n64': '-16rem',
        'n56': '-14rem',
        'n48': '-12rem',
        'n40': '-10rem',
        'max-content': 'max-content'
      },
      height: {
        '90': '30rem',
        '72': '18rem',
        'n72': '-18rem',
        'n64': '-16rem',
        'n56': '-14rem',
        'n48': '-12rem',
        'n40': '-10rem',
        'max-content': 'max-content'
      },
      backgroundImage: function backgroundImage(theme) {
        return {
          'first-banner': "url('/assets/images/banner_04.png')",
          'second-banner': "url('/assets/images/banner_03.png')",
          'third-banner': "url('/assets/images/img2.jpg')",
          'fourth-banner': "url('/assets/images/img3.jpg')",
          'display': "url('https://streamlabs.nyc3.cdn.digitaloceanspaces.com/assets/svg/components/graphics-6.svg')",
          'noisy': "url('https://streamlabs.nyc3.cdn.digitaloceanspaces.com/assets/svg/components/abstract-shapes-20.svg')",
          'svg-dots': "url('https://streamlabs.nyc3.cdn.digitaloceanspaces.com/assets/svg/components/dots-2.svg')"
        };
      }
    },
    flex: {
      '2': '0 0 33.3%'
    }
  },
  variants: {},
  plugins: [require('tailwindcss'), require('autoprefixer')]
};