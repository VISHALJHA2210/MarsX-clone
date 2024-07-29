import React from 'react';
import { Form } from './Form';

const Feed = () => {
  return (
    <div className='w-full mt-12'>
      <div className='sm:w-[75%] px-4 mx-auto'>
        <h1 className='md:text-6xl sm:text-5xl text-3xl font-boldFont'>Try Mars ☄️</h1>
        <div>
          <h2 className='text-gray-900 sm:text-2xl md:text-3xl text-xl md:font-regular font-semibold sm:mt-5 mt-3 flex flex-col gap-3 max-w-[600px]'>
            <span>Mars is in a private beta now. We onboard new users gradually.</span>
            <span>Kindly request the access by applying the simple form below.</span>
          </h2>
        </div>

        <div className='w-full my-20 flex flex-col md:flex-row gap-5'>
          <div className='w-full md:w-1/2'>
            <Form />
          </div>
          <div className='w-full md:w-1/2 mt-4'>
            <p className='font-regular '>
              <span className='bg-red-600 font-semibold text-white text-sm px-1 rounded-md'>21375</span> folks are in the line:
            </p>
            <div className='mt-2 border border-gray-200 overflow-hidden rounded-md font-regular'>
              <div className='bg-customGray/10 px-4 py-3 border border-b-gray-200'>
                <p className='font-default lg:text-xl'>21375  #############@gmail.com</p>
              </div>
              <div className='bg-customGray/10 px-4 py-3 border border-b-gray-200'>
                <p className='font-default lg:text-xl'>21374  ##########@gmail.com</p>
              </div>
              <div className='bg-customGray/10 px-4 py-3 border border-b-gray-200'>
                <p className='font-default lg:text-xl'>21373  ###########@gmail.com</p>
              </div>
              <div className='bg-customGray/10 px-4 py-3 border border-b-gray-200'>
                <p className='font-default lg:text-xl'>21372  ############@gmail.com</p>
              </div>
              <div className='bg-customGray/10 px-4 py-3 border border-b-gray-200'>
                <p className='font-default lg:text-xl'>21371  ########@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
