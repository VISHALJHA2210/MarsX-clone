import '../styles/globals.css';
import '../styles/fonts.css';
import Head from 'next/head';

export const metadata = {
  title: 'marsx',
  description: 'AI app',
};

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <Head>
        {/* Preload font files */}
        <link rel="preload" href="/fonts/black.otf" as="font" type="font/otf" crossorigin="anonymous" />
        <link rel="preload" href="/fonts/bold.otf" as="font" type="font/otf" crossorigin="anonymous" />
        <link rel="preload" href="/fonts/extrabold.otf" as="font" type="font/otf" crossorigin="anonymous" />
        <link rel="preload" href="/fonts/light.otf" as="font" type="font/otf" crossorigin="anonymous" />
        <link rel="preload" href="/fonts/medium.otf" as="font" type="font/otf" crossorigin="anonymous" />
        <link rel="preload" href="/fonts/regular.otf" as="font" type="font/otf" crossorigin="anonymous" />
        <link rel="preload" href="/fonts/semibold.otf" as="font" type="font/otf" crossorigin="anonymous" />
        <link rel="preload" href="/fonts/thin.otf" as="font" type="font/otf" crossorigin="anonymous" />
        <link rel="preload" href="/fonts/ultralight.otf" as="font" type="font/otf" crossorigin="anonymous" />
      </Head>
      <body>
        {children}
        <button className='bg-customOrange/80 hover:bg-customOrange text-white px-6 py-2 rounded-2xl fixed z-50 bottom-4 right-4 flex items-center'>
          <i className="fi fi-sr-comment-alt-middle mr-2 mt-2 text-2xl"></i>
          <span className='font-regular'>chat with founder</span>
        </button>
      </body>
    </html>
  );
}

export default RootLayout;
