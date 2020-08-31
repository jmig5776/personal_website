module.exports = {
  siteTitle: 'Jogi Miglani',
  siteDescription:
    'Jogi Miglani is a software engineer based in Punjab, India who specializes in building (and occasionally designing) exceptional websites, applications, and everything in between.',
  siteKeywords:
    'Jogi Miglani, Jogi, Miglani, jmig5776, software engineer, front-end engineer, web developer, javascript, northeastern',
  siteUrl: 'https://brittanychiang.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Jogi Miglani',
  location: 'Punjab, India',
  email: 'jmig5776@gmail.com',
  github: 'https://github.com/jmig5776',
  twitterHandle: '@jmig5776',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/jmig5776',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/jogi-miglani-131727161/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/jogi_miglani',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/jmig5776',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    black: '#0a192f',
    darkBlack: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
