"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import codeImg from '../public/utils/code.png';
import noCodeImg from '../public/utils/nocode.jpeg';
import microappsImg from '../public/utils/microapps.jpeg';

const PageNavigation = () => {

    const [activeButton, setActiveButton] = useState('Code');

    const handleClick = (e) => {
        setActiveButton(e.target.innerText);
    }

    const tabs=['Code', 'NoCode', 'MicroApps', 'Mars AI'  ];

  return (
    <div className='text-white w-full'>
        <div className='mt-20 font-regular md:font-semibold text-lg lg:text-2xl flex gap-4 text-gray-400/50'>
            {
                tabs.map((tab, index)=>{
                    return (
                        <button key={index} onClick={handleClick} className={`transition hover:text-white  ${activeButton === tab? 'text-white' : ''}`}>
                            {tab}
                        </button>
                    )
                })
            }
        </div>

        <div className='mt-3 md:mt-5 border border-black rounded-2xl overflow-hidden'>
            {
                activeButton === 'Code' && (
                    <Image src={codeImg} className='w-[95%]' alt="Code Image" />
                )
            }
            {
                activeButton === 'NoCode' && (
                    <Image src={noCodeImg} className='w-[95%]' alt="No Code Image" />
                )
            }
            {
                activeButton === 'MicroApps' && (
                    <Image src={microappsImg} className='w-[95%]' alt="MicroApps Image" />
                )
            }
            {
                activeButton === 'Mars AI' && (
                    <video className='w-[95%]' autoPlay muted loop>
                        <source src="/videos/MarsAI.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )
            }
        </div>

    </div>
  )
}

export default PageNavigation