import React from 'react';

const Footer = () => {
  return (
    <div className='bg-footerBG w-full p-20'>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-8 max-w-screen-lg mx-auto'>
        <div>
          <h2 className='font-semibold mb-4 text-lg md:text-xl'>For partners</h2>
          <ul>
            <li className='font-regular md:text-lg'><a href='#'>For accelerators</a></li>
            <li className='font-regular md:text-lg'><a href='#'>For freelancers</a></li>
            <li className='font-regular md:text-lg'><a href='#'>For dev shops</a></li>
            <li className='font-regular md:text-lg'><a href='#'>For venture studios</a></li>
            <li className='font-regular md:text-lg'><a href='#'>Brand kit</a></li>
          </ul>
        </div>

        <div>
          <h2 className='font-semibold mb-4 text-lg md:text-xl'>Mars Verse</h2>
          <ul>
            <li className='font-regular md:text-lg'><a href='#'>Unicorn Platform <span className='font-[sans-serif]'>-</span> landing page builder</a></li>
            <li className='font-regular md:text-lg'><a href='#'>UI generator</a></li>
            <li className='font-regular md:text-lg'><a href='#'>Float UI <span className='font-[sans-serif]'>-</span> Tailwind ui kit</a></li>
            <li className='font-regular md:text-lg'><a href='#'>Tools using Ai</a></li>
            <li className='font-regular md:text-lg'><a href='#'>AI website builder</a></li>
            <li className='font-regular md:text-lg'><a href='#'>Flexy <span className='font-[sans-serif]'>-</span> microapps builders</a></li>
            <li className='font-regular md:text-lg'><a href='#'>DevHunt <span className='font-[sans-serif]'>-</span> weekly best dev tools</a></li>
            <li className='font-regular md:text-lg'><a href='#'>Markesty <span className='font-[sans-serif]'>-</span> AI marketplace builder</a></li>
            <li className='font-regular md:text-lg'><a href='#'>SeoBot <span className='font-[sans-serif]'>-</span> automate entire SEO</a></li>
          </ul>
        </div>

        <div>
          <h2 className='font-semibold mb-4 text-lg md:text-xl'>Community</h2>
          <ul>
            <li className='font-regular md:text-lg'><a href='#'>Discord</a></li>
            <li className='font-regular md:text-lg'><a href='#'>Linkedin</a></li>
            <li className='font-regular md:text-lg'><a href='#'>Twitter</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
