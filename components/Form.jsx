"use client";
import React, { useEffect, useState } from 'react';

export const Form = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    console.log(isDropdownOpen);
  }, [isDropdownOpen]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);
  };

  return (
    <div>
      <form>
        <p className='font-regular text-gray-600 lg:text-xl'>Enter your email: <span className='text-red-600 font-default'>*</span></p>
        <input type="text" className='border font-regular border-gray-300 mt-3 h-8 w-full rounded-md p-2 lg:h-10' />

        <p className='font-regular text-gray-600 mt-4 lg:text-xl'>You are:</p>
        <div className="relative mt-3">
          <div className="border border-gray-300 h-8 lg:h-10 w-full rounded-md pr-10 flex items-center cursor-pointer" onClick={() => setDropdownOpen(prev => !prev)}>
            <span className="pl-3 text-gray-600">{selectedOption || ''}</span>

            <i className={`fi fi-rr-caret-` + (!isDropdownOpen ? 'down' : 'up') +` absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400`}></i>

          </div>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-1 w-full border border-gray-300 rounded-md bg-white shadow-md z-10">
              <div className="py-1">
                <div className="px-4 py-2 font-regular cursor-pointer hover:bg-gray-100" onClick={() => handleOptionClick('Developer')}>Developer</div>
                <div className="px-4 py-2 font-regular cursor-pointer hover:bg-gray-100" onClick={() => handleOptionClick('Non Developer')}>Non Developer</div>
              </div>
            </div>
          )}
        </div>

        <p className='font-regular text-gray-600 mt-4 lg:text-xl'>How would you use Mars?</p>
        <textarea className='border font-regular border-gray-300 mt-3 w-full rounded-md p-2'></textarea>

        <button className='font-regular w-full py-3 lg:py-4 text-xl rounded-2xl text-gray-300 bg-black mt-4'>
          Get in the line
        </button>
      </form>
    </div>
  );
};
