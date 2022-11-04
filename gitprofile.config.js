// gitprofile.config.js

const config = {
  github: {
    username: 'abdellahaski', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: ['EMSIStage','medigo'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'abdellahaski',
    twitter: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '5063276/asghostki', // format: userid/username
    website: 'https://abdellahaski.github.io',
    phone: '',
    email: 'abdellah@aski.me',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'TypeScript',
    'JavaScript',
    'Angular',
    'Firebase',
    'Node.js',
    'Java',
    'MySQL',
    'PL/SQL',
    'Git',
    'Docker',
    'Google Cloud Platform',
    'IT Consulting',
  ],
  experiences: [
    {
      company: 'Sopra Banking Software',
      position: 'Software Engineer / IT Consultant',
      from: 'Mars 2019',
      to: 'Present',
      companyLink: 'https://www.soprabanking.com/',
    },
    {
      company: 'National Meteorological Department',
      position: 'Software Engineer Intern',
      from: 'July 2018',
      to: 'September 2018',
      companyLink: 'https://www.marocmeteo.ma/',
    },
    {
      company: 'HPS',
      position: 'Software Engineer Intern',
      from: 'August 2017',
      to: 'September 2017',
      companyLink: 'https://www.marocmeteo.ma/',
    },
  ],
  education: [
    {
      institution: 'Côte d\'Azur University',
      degree: 'Master\'s Degree in Computer Science (MIAGE)',
      from: '2018',
      to: '2019',
    },
    {
      institution: 'Moroccan School of Engineering Sciences',
      degree: 'Engineer\'s Degree in Computer Science',
      from: '2014',
      to: '2019',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'jintoppy', // to hide blog section, keep it empty
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
