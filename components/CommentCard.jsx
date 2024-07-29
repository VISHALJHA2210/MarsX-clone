import Image from 'next/image'
import React from 'react'

const CommentCard = ({pf, name, title, comment}) => {
  return (
    <div className='w-full'>
        <div className='border border-gray-200 rounded-2xl overflow-hidden p-10 shadow-md h-80 hover:bg-blue-100/50'>
            <div className='flex gap-4'>
                <Image src={pf} className='rounded-full w-12 h-12' />
                <div className='flex flex-col leading-tight mt-1'>
                    <h2 className='font-bold text-lg'>{name}</h2>
                    <p className='text-gray-400 -mt-1 text-xs'>{title}</p>
                </div>
            </div>
            <div className='my-8 text-lg md:text-xl font-regular overflow-hidden'>
                <p className='line-clamp-4 md:line-clamp-none '>{comment}</p>
            </div>
        </div>
    </div>
  )
}

export default CommentCard
