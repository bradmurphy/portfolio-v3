import avatar from './images/avatar.jpg';
import back from './images/back.png';
import badge from './images/badge.png';
import codepen from './images/codepen.png';
import download from './images/download.png';
import github from './images/github.png';
import instagram from './images/instagram.png';
import linkedIn from './images/linkedin.png';
import logo from './images/logo.png';
import logoBA from './images/logo-ba.png';
import logoBenefix from './images/logo-benefix.png';
import logoGoogle from './images/logo-google.png';
import logoHook from './images/logo-hook.png';
import logoKefi from './images/logo-kefi.png';
import logoSG from './images/logo-sg.png';
import logoYouTube from './images/logo-youtube.png';

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
    logoBA,
    logoBenefix,
    logoGoogle,
    logoHook,
    logoKefi,
    logoSG,
    logoYouTube
};

const data = {
    about: {
        avatar: avatar,
        ba: {
            alt: 'Black Airplane',
            link: 'https://blackairplane.com/',
            src: logoBA
        },
        logo: {
            alt: 'Brad Murphy Logo',
            src: logo
        },
        name: 'Brad Murphy',
        title: 'Interface Engineer'
    },
    projects: [
        {
            logo: logoSG,
            width: 230,
            headline: 'Sabrina Girvan',
            type: 'Website',
            url: 'http://sabrinagirvan.com',
            date: 'August 2019',
            copy: `Inspiring people to live healthy & happy every day.`,
            technology: [
                'HTML5',
                'CSS3',
                'JavaScript',
                'PHP',
                'ReactJS'
            ]
        },
        {
            logo: logoKefi,
            width: 85,
            headline: 'Kefi',
            type: 'Website/Apps/API',
            url: 'https://playkefi.com',
            date: 'July 2019',
            copy: `Creating awesome environments for kids, through the power of wonder and imagination, that parents love too.`,
            technology: [
                'HTML5',
                'CSS3',
                'JavaScript',
                'PHP',
                'Wordpress',
                'Laravel',
                'Vue',
                'React Native',
                'Square'
            ]
        },
        {
            logo: logoGoogle,
            width: 135,
            headline: 'Google News',
            type: 'Website',
            url: 'https://news.google.com/about/',
            date: 'July 2018',
            copy: `Google News organizes what’s happening to help you learn more about the stories that matter to you and the world.`,
            technology: [
                'HTML5',
                'CSS3',
                'JavaScript'
            ]
        },
        {
            logo: logoYouTube,
            width: 175,
            headline: 'Rewind 2017',
            type: 'Website',
            url: 'https://rewind2017.withyoutube.com',
            date: 'December 2017',
            copy: `Explore the videos, people, and trends that defined YouTube in 2017.  #YouTubeRewind2017`,
            technology: [
                'HTML5',
                'CSS3',
                'JavaScript',
                'Polymer',
                'WebGL',
                'THREE.js',
                'GSAP'
            ]
        },
        {
            logo: logoBenefix,
            width: 174,
            headline: 'Benefix',
            type: 'Website',
            url: 'https://benefix.us/',
            date: 'November 2017',
            copy: `BeneFix is your one-stop-shop for small group benefits, offering 100% accurate and
         real-time quoting for medical insurance, saving you and your agency both time, money, and more.`,
            technology: [
                'HTML5',
                'CSS3',
                'JavaScript',
                'Metalsmith',
                'Slick',
                'jQuery'
            ]
        },
        {
            logo: logoYouTube,
            width: 175,
            headline: 'Rewind 2016',
            type: 'Website',
            url: 'https://rewind2016.withyoutube.com/',
            date: 'December 2016',
            copy: `Celebrating the videos, people, music and moves that made 2016. #YouTubeRewind2016`,
            technology: [
                'HTML5',
                'CSS3',
                'JavaScript',
                'Polymer',
                'GSAP'
            ]
        },
        {
            logo: logoHook,
            width: 140,
            headline: 'Stitches',
            type: 'Web App',
            url: 'http://hookerz.github.io/stitches',
            date: 'March 2016',
            copy: `A Web App for quickly creating sprite sheets.`,
            technology: [
                'HTML5',
                'CSS3',
                'JavaScript',
                'Polymer',
                'GSAP'
            ]
        }
    ],
    contact: {
        reachOut: 'Reach out anytime for coffee or conversation.',
        email: {
            link: 'mailto:bm.dev84@gmail.com?&subject=BRADMURPHYDEV.COM | Website Inquiry',
            address: 'bm.dev84@gmail.com'
        },
        social: [
            {
                link: 'https://www.instagram.com/wyck13/',
                logo: instagram,
                alt: 'Instagram'
            },
            {
                link: 'https://codepen.io/bradmurphy',
                logo: codepen,
                alt: 'Codepen'
            },
            {
                link: 'https://github.com/bradmurphy',
                logo: github,
                alt: 'GitHub'
            },
            {
                link: 'https://www.linkedin.com/in/bmdev/',
                logo: linkedIn,
                alt: 'LinkedIn'
            }
        ],
        resume: {
            link: '/resume/',
            text: 'View Resume'
        },
        thankYou: `Thankyou for contacting me, I'll get back to you as soon as possible!`
    }
};

export { images, data };
