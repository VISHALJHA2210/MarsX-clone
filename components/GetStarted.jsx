import React from 'react'
import Image from 'next/image'
import getstartedbox from '../public/utils/getstartedbox.png'

const GetStarted = () => {
  return (
    <div className="bg-black w-full">
        <div className="sm:w-[80%] px-4 lg:px-12 mx-auto py-16 ">
            <div className="flex justify-between items-center gap-5">
                <div>
                    <h1 className="sm:text-6xl lg:text-7xl text-[3.2rem] leading-tight font-boldFont text-white">
                        Get Started
                    </h1>
                    <div>
                        <h2 className="text-white sm:text-2xl md:text-3xl text-xl md:font-semibold font-regular sm:mt-5 mt-3 flex flex-col gap-3 max-w-[600px]">
                        <span>
                        Simply reuse the work of excellent expert teams which put thousands of hours into it. Every developer behind a MicroApp virtually extends your core team at no cost.
                            <span className="font-default">!</span>
                        </span>
                        </h2>
                    </div>
                </div>
                <div
                className="relative"
                style={{ width: "17rem", height: "17rem" }}
                >
                    <Image
                        src={getstartedbox}
                        layout="intrinsic"
                        width={350}
                        height={350}
                        alt="MicroApp Box Image"
                    />
                </div>
            </div>
            <div className='mt-8'>
                <button className='bg-customOrange px-4 py-3 rounded-2xl text-md sm:text-lg md:text-2xl font-light w-36 lg:w-64'>
                    Request the access
                </button>
            </div>
        </div>
    </div>
  )
}

export default GetStarted