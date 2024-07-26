import React from 'react';
import video from '../assets/hero.mp4';
import hero from '../assets/hero.jpeg';
import logo from '../assets/logo.png';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className='relative flex items-center justify-center h-screen'>
      <div className='absolute inset-0 z-20 w-full h-full overflow-hidden'>
        <video
          src={video}
          className='object-cover w-full h-full'
          muted
          autoPlay
          loop
          playsInline
          poster={hero}
        />
      </div>
      <div className='absolute inset-0 bg-gradient-to-b from-transparent from-70% to-black'>
        <div className='relative z-20 flex flex-col justify-end h-screen pb-20'>
          <motion.img
          initial={{opacity:0,y:50}}
          animate={{opacity:1, y:0}}
          transition={{duration:0.5}}
          src={logo} alt='restaura' className='w-full p-4'/>
          <p className='p-4 text-lg tracking-tighter text-white'>Kandy</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
