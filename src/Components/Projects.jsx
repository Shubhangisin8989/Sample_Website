import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets';
import {motion} from "framer-motion"

const Projects=()=>{
   const[CurrentIndex,setCurrentIndex]=useState(0)
   const[cardsToShow,setcardsToShow]=useState(1)

   useEffect(()=>{
    const updatecardsToShow=()=>{
      if(window.innerWidth>=1024){
         setcardsToShow(projectsData.length)
      }else{
         setcardsToShow(1)
      };
   }  
      updatecardsToShow()
      window.addEventListener('resize',updatecardsToShow)
      return()=>window.removeEventListener('resize',updatecardsToShow)
    
   },[])

   const nextProject=()=>{
      setCurrentIndex((prevIndex)=>(prevIndex+1)%projectsData.length)
   }
   const prevProject=()=>{
      setCurrentIndex((prevIndex)=>prevIndex===0?projectsData.length-1:prevIndex-1)
   }

 return (
     <motion.div
     initial={{opacity:0,x:-200}} 
        transition={{duration:1.5}}
        whileInView={{opacity:1,x:0}}
        viewport={{once:true}}

     className='container mx-auto py-4 px-6 pt-20 lg:px-32 md:px-20 w-full overflow-hidden my-20' id='Projects'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects 
         <span className='underline underline-offset-4 decoration-1 font-light under'> Completed</span></h1>
        <p className='text-gray-500 max-w-80 text-center mb-8 mx-auto'>Crafting Spaces,Building Legacies-Explore Our Portfolio</p>
{/* Slider Button */}
        <div className='flex justify-end items-center mb-8'>
         <button onClick={prevProject}
         className='bg-gray-200 rounded p-3 mr-2' aria-label='Previous Projects'>
            <img src={assets.left_arrow} alt="Previous" />
            </button>
         <button onClick={nextProject}
          className='bg-gray-200 rounded p-3 mr-2' aria-label='Next Projects'>
            <img src={assets.right_arrow} alt="Next" />
            </button>
        </div>
        {/* Project Slider */}
        <div className='overflow-hidden'>
         <div className='flex gap-8 transition-transform duration-500 ease-in-out'
         style={{transform:`translateX(-${(CurrentIndex*100)/cardsToShow}%)`}}>
            {projectsData.map((project,index)=>(
               <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                 <img src={project.image} alt={project.title} className='w-full h-auto mb-14' /> 

                 <div className='left-0 right-0 absolute bottom-5 flex justify-center'>
                  <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                   <h2 className='text-xl font-semibold text-gray-800'>{project.title}
                      </h2>
                        <p className='text-gray-500 text-sm'>{project.price} <span>|</span>{project.location}
                        </p>
                  </div>
                    
                 </div>
                   </div>
            ))}
         </div>
        </div>
     </motion.div>
  );
};

export default Projects;