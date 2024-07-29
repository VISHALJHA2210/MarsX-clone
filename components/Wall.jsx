import React from 'react'
import Image from 'next/image'
import WallofLove from '../public/utils/walloflove.jpeg'
import CommentCard from './CommentCard'
import pf1 from '../public/utils/pf1.jpeg'
import pf2 from '../public/utils/pf2.jpeg'
import pf3 from '../public/utils/pf3.jpeg'
import pf4 from '../public/utils/pf4.jpeg'

const Wall = () => {
  return (
    <div className="bg-white w-full">
        <div className="sm:w-[80%] px-4 lg:px-12 mx-auto py-16 ">
            <div className="flex justify-between items-center gap-5">
                <div>
                    <h1 className="sm:text-6xl lg:text-7xl text-[3.2rem] leading-tight font-boldFont text-Black">
                        The Wall of ❤️
                    </h1>
                    <div>
                        <h2 className="text-black sm:text-2xl md:text-3xl text-xl md:font-semibold font-regular sm:mt-5 mt-3 flex flex-col gap-3 max-w-[600px]">
                            <span>
                                Don’t just set out to do a good job. Set out to do such a good job that the living, the dead, or the unborn couldn’t do it any better.
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
                        src={WallofLove}
                        layout="intrinsic"
                        width={400}
                        height={400}
                        alt="MicroApp Box Image"
                        className='mt-12'
                    />
                </div>
            </div>

            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-4'>
                <CommentCard pf={pf1} name="Didrik Martens" title="Founder @BizBot" comment="According to our estimations, using Mars saved us 5,760 hours yearly for our designers and engineers. That’s worth 133,000 USD per year."  />
                <CommentCard pf={pf2} name="Sundus Osman" title="Founder @SASU" comment="We've built entire project just in few month and 10k budget with a help of developers from Mars Network. Very quickly after the launch we've got our first customers and since then the revenue was only growing!"  />
                <CommentCard pf={pf3} name="Kim Andre" title="Founder @Enter.Art" comment="Mars increased the dev speed perhaps by 1000%, it handled very well the high load and large number of users and transactions on our platform. The NoCode part has been very usefull for the admins, who could change a lot of the settings and content on their own not to bother developers with it."  />
                <CommentCard pf={pf4} name="Patrick Von Sychowski" title="Founder @Cultpix" comment="Out platform could not have seen the light of day without Filmgrail's top notch streaming technology powered by Mars, which fits out business needs perfectly."  />
            </div>
            
        </div>
    </div>
  )
}

export default Wall