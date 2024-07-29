import React from 'react';

const Card = ({ title, body, btn="false" }) => {
  return (
    <div className="p-8 border border-gray-400/10 w-full h-[17rem] md:h-[20rem]">
        <h2 className='font-boldFont text-lg md:text-2xl'>{title}</h2>
        <p className='mt-2 font-regular text-lg md:text-xl text-gray-700'>{body}</p>

        {
            btn === "true" && (
                <div className='mt-5 mb-2'>
                    <button className='font-regular hover:text-customOrange text-lg md:text-xl'>
                        Go to Website <i className="fi fi-rr-arrow-small-right text-xl relative top-1"></i>
                    </button>
                </div>
            )
        }
    </div>
  );
};

export default Card;
