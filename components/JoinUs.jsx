import React from 'react'
import Image from 'next/image'
import JoinUsImage from '../public/utils/joinus.gif'

const JoinUs = () => {
  return (
    <div className="bg-black w-full">
        <div className="sm:w-[80%] px-4 lg:px-12 mx-auto py-16 ">
            <div className="flex justify-between items-center gap-5">
                <div>
                    <h1 className="sm:text-6xl lg:text-7xl text-[3.2rem] leading-tight font-boldFont text-white">
                        Join our community
                    </h1>
                    <div>
                        <h2 className="text-white sm:text-2xl md:text-3xl text-xl md:font-semibold font-regular sm:mt-5 mt-3 flex flex-col gap-3">
                            <ul className='list-disc pl-5'>
                                <li>find developers for your project</li>
                                <li>learn Mars</li>
                                <li>get a demo</li>
                                <li>follow our news and releases</li>
                                <li>say hello to the founders and core team</li>
                                <li>discuss partnerships</li>
                            </ul>
                        </h2>
                    </div>
                </div>
                <div
                className="relative w-full h-full"
                >
                    <Image
                        src={JoinUsImage}
                        layout="intrinsic"
                        width={350}
                        height={350}
                        alt="MicroApp Box Image"
                        className='-mt-48 sm:mt-0 sm:absolute sm:right-0 sm:-top-52'
                    />
                </div>
            </div>
            <div className='mt-8'>
                <button className='bg-customOrange px-4 py-3 rounded-2xl text-md sm:text-lg md:text-2xl font-light w-36 lg:w-64'>
                    Join Discord
                </button>
            </div>
        </div>
    </div>
  )
}

export default JoinUs