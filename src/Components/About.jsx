import { useGSAP } from '@gsap/react'
import React from 'react'

const About = () => {
 
  return (
    <div id="about" className="max-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5"> 
<h2 className='font-general text-sm uppercase md:text-[10px]'>Welcome to Zentry</h2>
<div className='mt-5 text-center text-4xl uppercase  '>
Disc<b>o</b> ver the world's <br/> l<b>a</b>rgest shared adventure
 
 </div>
 <div className='about-subtext'>
  <p>The game of games begins-your life </p>
  <p>Zentry unites every players from countless games and platform </p>
 </div>
      </div>
        <div className='h-dvh w-screen ' id='clip'>
          <div className='mask-clip-path about-iamge'>
            <img
            src='img/about.webp'
            alt='background'
            // className=' absolute left-0 top-0 size-full object-cover'
            />
          </div>
        </div>
    </div>
  )
}

export default About