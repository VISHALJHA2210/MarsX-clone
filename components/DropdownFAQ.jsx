"use client"

import React, { useState } from 'react'

const DropdownFAQ = ({ title, body }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpand = () => {
        setIsExpanded(prev => !prev);
    }

    return (
        <div className='w-full max-w-[1000px]font-regular text-white'>
            <div className='flex flex-col w-full px-2 border border-white rounded-2xl overflow-hidden'>
                <button
                    onClick={handleExpand}
                    className='flex items-center justify-between px-4 py-3 md:py-5 md:text-xl w-full rounded-t-2xl'
                >
                    <span>{title}</span>
                    <i
                        className={`fi fi-rr-plus-small text-customGray text-3xl icon-transition ${isExpanded ? 'rotate-45' : ''}`}
                    ></i>
                </button>
                <div className={`transition-max-height duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-screen' : 'max-h-0'}`}>
                    <div className='px-4 mb-8 font-regular md:text-lg'>
                        {body}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropdownFAQ
