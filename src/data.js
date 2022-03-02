import avatar from './images/avatar.jpg';
import back from './images/back.png';
import badge from './images/badge.png';
import codepen from './images/codepen.png';
import download from './images/download.png';
import github from './images/github.png';
import instagram from './images/instagram.png';
import linkedIn from './images/linkedin.png';
import logo from './images/logo.png';
import logoBlinkk from './images/logo-blinkk.jpeg';
import logoGoogle from './images/logo-google.png';
import logoHook from './images/logo-hook.png';
import logoNetflix from './images/logo-netflix.png';
import logoSG from './images/logo-sg.png';
import logoTeachable from './images/logo-teachable.svg';
// import logoYouTube from './images/logo-youtube.png';

const images = {
  avatar,
  back,
  badge,
  codepen,
  download,
  github,
  instagram,
  linkedIn,
  logo,
  logoBlinkk,
  logoGoogle,
  logoHook,
  logoSG,
  logoTeachable,
  // logoYouTube
};

const data = {
  about: {
    avatar: avatar,
    work: {
      alt: 'Blinkk',
      link: 'https://blinkk.com/',
      src: logoBlinkk,
    },
    logo: {
      alt: `Brad Murphy's Logo`,
      src: logo,
    },
    name: 'Brad Murphy',
    title: 'UX Engineer',
  },
  projects: [
    {
      logo: logoGoogle,
      width: 135,
      headline: 'Google Maps Platform',
      type: 'Website',
      url: 'https://mapsplatform.google.com/',
      date: 'October 2021',
      copy: `Create real world and real time experiences for your customers with dynamic maps, routes &amp; places APIs from Google Maps Platform’s location solutions.`,
      technology: ['HTML5', 'Nunjucks', 'CSS3', 'SASS', 'TypeScript'],
    },
    {
      logo: logoTeachable,
      width: 194,
      headline: 'Teachable Blog',
      type: 'Website',
      url: 'https://teachable.com/blog',
      date: 'April 2021',
      copy: `Read the latest Teachable blog posts on marketing tips, interviews, money news, online course info, and more for entrepreneurs and creators.`,
      technology: ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'WordPress', 'PHP'],
    },
    {
      logo: logoNetflix,
      width: 185,
      headline: 'Fuller My House',
      type: 'Website',
      url: 'http://fh.bradmurphydev.com/',
      date: 'February 2020',
      copy: `Create and share your own Fuller House family logo with FullerMyHouse.`,
      technology: ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'React'],
    },
    {
      logo: logoSG,
      width: 230,
      headline: 'Sabrina Girvan',
      type: 'Website',
      url: 'http://sabrinagirvan.com',
      date: 'August 2019',
      copy: `Inspiring people to live healthy & happy every day.`,
      technology: ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'React', 'PHP'],
    },
    {
      logo: logoHook,
      width: 160,
      headline: 'Stitches',
      type: 'Web App',
      url: 'http://hookerz.github.io/stitches',
      date: 'March 2016',
      copy: `A Web App for quickly creating sprite sheets.`,
      technology: ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'Polymer', 'GSAP'],
    },
  ],
  contact: {
    reachOut: 'Reach out anytime for coffee or conversation.',
    email: {
      link: 'mailto:bm.dev84@gmail.com?&subject=BRADMURPHYDEV.COM | Website Inquiry',
      address: 'bm.dev84@gmail.com',
    },
    social: [
      {
        link: 'https://www.instagram.com/wyck13/',
        logo: instagram,
        alt: 'Instagram',
      },
      {
        link: 'https://codepen.io/bradmurphy',
        logo: codepen,
        alt: 'Codepen',
      },
      {
        link: 'https://github.com/bradmurphy',
        logo: github,
        alt: 'GitHub',
      },
      {
        link: 'https://www.linkedin.com/in/bmdev/',
        logo: linkedIn,
        alt: 'LinkedIn',
      },
    ],
    resume: {
      link: '/resume/',
      text: 'View Resume',
    },
    thankYou: `Thankyou for contacting me, I'll get back to you as soon as possible!`,
  },
};

export { images, data };
