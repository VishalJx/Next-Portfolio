import React from 'react'
import { projects } from '@/data'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import {motion} from 'framer-motion'

function ProjectDesc() {

    const tech = projects[0].tech;

    let animationBefore=(index) => {
        if(index%2==0){
            return{
                x:-12,
                opacity:0
            }
    }
        else{
            return{
                x:12,
                opacity:0
            }
        }
    }
    let animationAfter=(index) => {
        if(index%2==0){
            return{
                x:12,
                opacity:1
            }
    }
        else{
            return{
                x:-12,
                opacity:1
            }
        }
    }

    let animation2Before=(index) => {
        if(index%2==0){
            return{
                x:12,
                opacity:0
            }
    }
        else{
            return{
                x:-18,
                opacity:0
            }
        }
    }
    let animation2After=(index) => {
        if(index%2==0){
            return{
                x:0,
                opacity:1
            }
    }
        else{
            return{
                x:-7,
                opacity:1
            }
        }
    }



  return (
    <div className='flex flex-col justify-center items-center gap-20'>
        {
            projects.map((project, index) =>{
                return(
                    <div key={index}  className={`${index%2 ==0 ?"flex flex-row":" flex flex-row-reverse "} w-full justify-center items-center`}>
                        <motion.div 
                            className={`w-full xl:w-1/2 h-auto relative group ${index%2==0?"mr-0":"-mr-12"}`}
                            initial={animationBefore(index)}
                            whileInView={animationAfter(index)}
                            transition={{duration:1.2}}>
                            <Image src={project.image} alt="" className='w-full object-contain' width={400} height={300}/>
                        </motion.div>
                        <motion.div 
                            className={`w-full xl:w-1/2 flex flex-col gap-3 lgl: justify-between
                                        items-end text-right xl: ${index%2==0?"-ml-16":"-mr-16"} z-20`}
                            initial={animation2Before(index)}
                            whileInView={animation2After(index)}
                            transition={{duration:1.2}}>
                            <div>
                                <p className={`font-titleFont text-textGreen text-sm tracking-wide ${index%2 ==1?"mr-20":"mr-0"}`}>
                                    Featured Project
                                </p>
                                <h3 className={`text-2xl font-bolder text-end mt-0 ${index%2 ==1?"mr-20":"mr-0"}`}>{project.title}</h3>
                            </div>
                            <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>{project.description}</p>
                            <ul className={`text-xs justify-end md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5
                                -justify-between text-textDark ${index%2 ==1?"mr-20":"mr-0"}`}>
                                {
                                    tech.map((tag, index) =>{
                                        return(
                                            <li key={index}>{tag}</li>
                                        )
                                    })
                                }
                            </ul>
                            <div className={`flex gap-4 text-lg ${index%2 ==1?"mr-20":"mr-0"}`} >
                                <a href={project.github} target='_blank'>
                                    <FaGithub className=' text-textDark hover:text-textGreen duration-300'/>
                                </a>
                                <a href={project.deploy} target='_blank'>
                                    <FaExternalLinkAlt className=' text-textDark hover:text-textGreen duration-300'/>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ProjectDesc