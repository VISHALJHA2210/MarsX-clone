import React from 'react'
import Image from 'next/image';
import bird from '../utils/bird.webp';
import logo from '../utils/logo.png';
import Link from 'next/link';

const Nav = () => {
  return (
    <>
        <div className="bg-customGray w-full sm:h-20 h-24">
            <div className="flex items-center justify-center lg:justify-between gap-5 md:pt-5 pt-3 lg:pt-3 md:mx-24 lg:mx-48">
                <div className="flex items-center">
                    <Image src={bird} width={80} height={80} />
                    <p className="text-white font-regular lg:text-xl ml-2">🦄 We have launched AI powered landing page builder 🦄</p>
                </div>
                <div className="flex items-center lg:flex">
                    <Link href="https://unicornplatform.com/">
                        <button className="flex items-center bg-customOrange py-2 px-3 rounded-lg text-xs sm:text-sm font-semibold w-24 sm:w-36 transition hover:bg-customOrange/70 shake-on-reload">
                            Try now for free
                            <i className="fi fi-rr-arrow-right text-lg ml-1 mt-1"></i>
                        </button>
                    </Link>
                </div>
            </div>
        </div>

        <div className="bg-black w-full h-20">
            <div className='flex items-center justify-evenly md:justify-between md:pt-5 lg:pt-3 md:mx-24 lg:mx-48 '>
                <div className='block md:hidden'>
                    <i className="fi fi-br-menu-burger text-white bg-gray-900 py-2 px-3 rounded-full"></i>
                </div>
                <div className='md:w-20 lg:w-32'>
                    <Link href="/">
                        <Image src={logo} width={200} height={200} />
                    </Link>
                </div>
                <div>
                    <Link href="/join-waitlist">
                        <button className='px-3 py-2 lg:text-lg text-xs border border-white rounded-lg font-semiboldla text-white transition hover:border-gray-500 hover:text-gray-500'>
                            Join Waitlist
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </>

  )
}

export default Nav

