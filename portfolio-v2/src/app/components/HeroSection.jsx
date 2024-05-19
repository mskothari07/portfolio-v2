"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12 my-4'>
        <div className='col-span-7 place-self-center text-center sm:text-left'>
          <h1 className="text-white marker mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-white">Hello, I'm {" "}</span>
            <br/>
            <TypeAnimation
              sequence={[
                "Meet",
                1000,
                "Full Stack Developer",
                1000,
                "AWS Certified",
                1000,
                "Cloud Application Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
            Loremadadafsd fsdfjkh
          </p>
          <div>
            <button className="px-6 py-3  w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200">Let's Connect</button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3">Download Resume</button>
          </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className="lg:w-[450px] lg:h-[450px] w-[300px] h-[300px] rounded-full relative">
            <Image
              src="/images/meet.png"
              alt='Hero Image'
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection