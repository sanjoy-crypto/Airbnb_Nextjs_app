import Image from 'next/image'
import React from 'react'

const Banner = () => {
    return (
        <div className='relative h-[300px] sm:h-[350px] lg:h-[450px] xl:h-[550px] 2xl:h-[650px]'>
           <Image 
           src="/banner11.jpg"
           layout='fill'
           objectFit='cover'
           />
           <div className="absolute top-1/2 w-full text-center">
               <p className="tex-sm sm:text-2xl font-semibold">Not sure where to go? Perfect.</p>
               <button className="text-purple-500 bg-white px-10 py-4 rounded-full shadow-md my-3 font-bold hover:shadow-xl active:scale-90 transition duration-150">I&apos;m flexible</button>
           </div>
        </div>
    )
}

export default Banner
