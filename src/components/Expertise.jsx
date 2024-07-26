import React from 'react'
import { CUSINES } from '../constants'
import { motion } from 'framer-motion'

 const containerVariants={
    hidden:{opacity:0},
    show:{
        opacity:1,
        transition:{
            staggerChildren:1
        }
    }
 }
 const ItemVariants={
    hidden:{opacity:0,y:20},
    show:{opacity:1, y:0,transition:{
        duration:0.8
    }}
 }

function Expertise() {
  return (
  <section id='expertise'>
    <h2 className='my-8 text-3xl tracking-tighter text-center text-white'>
        Our Expertise
    </h2>
    <motion.div 
    initial="hidden"
    whileInView='show'
    variants={containerVariants}
    className='container px-4 mx-auto text-white'>
        {CUSINES.map((cusine,index)=>(
            <motion.div key={index}
            variants={ItemVariants}
            className='flex items-center py-2 border-dotted border-neutral-700/40 border-net '> 
            <div className='flex-shrink-0 pr-8 text-2xl'>
                {cusine.number}
                
            </div>
            <div className='w-1/3 flex-s'>
                <img src={cusine.image}
                alt={cusine.title}
                className='h-auto rounded-3xl'/>
            </div>
            <div className='pl-8'>
               <h3 className='text-2xl tracking-tighter uppercase text-rose-300'>
                {cusine.title}                </h3>   
                <p className='mt-4 text-lg tracking-tighter text-white'>{cusine.description}</p>             
            </div>
         </motion.div>
        ))}
    </motion.div>
  </section>
  )
}

export default Expertise