import React from 'react'
import { projects } from '@/data'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import {motion} from 'framer-motion'

function ProjectDesc() {

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
                    <div key={index}  className={`${index%2 ==0 ?"flex md:flex-row ":"flex md:flex-row-reverse "}w-full sm:flex-col justify-center items-center`}>
                        <motion.div 
                            className={`w-full xl:w-1/2 h-auto relative group`}
                            initial={animationBefore(index)}
                            whileInView={animationAfter(index)}
                            transition={{duration:1.2}}>
                            <Image src={project.image} alt="" className={`w-full h-27 object-contain ${index%2==0?"md:ml-16 xs:-ml-3":"md:-ml-16 xs:ml-3"}`} width={400} height={300}/>
                        </motion.div>
                        <motion.div 
                            className={`w-full xl:w-1/2 flex flex-col gap-4 lgl: justify-between
                                        items-end text-right xl: ${index%2==0?"-ml-16 xs:mx-auto":"-mr-16 xs:mx-auto"} z-20`}
                            initial={animation2Before(index)}
                            whileInView={animation2After(index)}
                            transition={{duration:1.2}}>
                            <div className={`xs:w-full xs:flex xs:flex-col justify-center ${index%2 ==0?"md:mr-0":"md:mr-20"} md:w-2/5 md:items-end`}>
                                <p className={`font-titleFont text-textGreen text-sm tracking-wide xs:text-center xs:mx-auto md:mx-0`}>
                                    Featured Project
                                </p>
                                <h3 className={`text-2xl font-bolder text-end mt-0 mr-0 xs:text-center`}>{project.title}</h3>
                            </div>
                            <p className={`bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md xs:text-justify`}>{project.description}</p>
                            <ul className={`text-xs justify-end md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5
                                -justify-between text-textDark ${index%2 ==0?"md:mr-0":"md:mr-20"} xs:mx-auto md:mx-0`}>
                                {
                                    projects[index].tech.map((tag, index) =>{
                                        return(
                                            <li key={index}>{tag}</li>
                                        )
                                    })
                                }
                            </ul>
                            <div className={`flex gap-4 text-lg ${index%2 ==0?"md:mr-0":"md:mr-20"} xs:mx-auto md:mx-0`} >
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