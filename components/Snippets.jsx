import React from 'react'
import PageNavigation from './PageNavigation'

const Snippets = () => {
  return (
    <div className='bg-black w-full'>
        <div className='sm:w-[80%] px-4 lg:px-12 mx-auto py-16'>
          <h1 className='sm:text-6xl lg:text-7xl text-[3.2rem] leading-tight font-boldFont text-white'>
            Code <span className='font-default'>+</span> NoCode <span className='font-default'>+</span> AI
          </h1>

          <div>
            <h2 className='text-white sm:text-2xl md:text-3xl text-xl md:font-regular font-semibold sm:mt-5 mt-3 flex flex-col gap-3 max-w-[600px]'>
              <span>MarsX: Chang﻿ing the game of software development</span>
            </h2>
          </div>

          <PageNavigation />      

        </div>
    </div>
  )
}

export default Snippets