import config from './index';
const author = {
  name: 'Emmanuel David Tuksa',
  twitter: '@dt_emmie',
  github: '@DeTuksa',
  email: 'emmydave414@gmail.com',
  website: 'https://tuksa.netlify.app/',
};

const defaultTitle = '@tuksa';
const defaultDescription =
  "Hi there! I'm Emmanuel David Tuksa, a Software Engineer from Nigeria currently in England. I ❤️ Open Source, Dart, Rust, JavaScript, music, food, and continous improvement.";

const metadata = {
  title: {
    template: '%s | @tuksa',
    default: defaultTitle,
  },
  description: defaultDescription,
  keywords: [
    'emmanuel david tuksa',
    'tuksa',
    'software engineer',
    'open source',
    'javascript',
    'typescript',
    'nodejs',
    'nestjs',
    'rust',
    'dart',
    'typescript',
    'nigeria',
    'united kingdom (uk)',
  ],
  author,
  authors: [author],
  colorSchema: 'dark',
  metadataBase: new URL(config.baseUrl),
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: config.baseUrl,
    siteName: defaultTitle,
    images: [
      {
        url: 'https://mateonunez.dev/card.png',
        width: 512,
        height: 512,
        alt: 'Mateo Nunez',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  icons: {
    icon: '/favicon-16x16.png',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    creator: '@mmateonunez',
  },
};

export default metadata;
