import React from "react"
import SectionTitle from "./SectionTitle";
import { skillData, about } from "@/data";
import Image from "next/image";
import avatar from "../images/avatar.png"
import { motion } from "framer-motion";
import {BiSolidTagAlt} from "react-icons/bi"

function About(){

	const effectInitial=(index)=>{
		if(index%2==0){
			return{
				x:-15,
				opacity:0
			}
		}
		else{
			return{
				x:15,
				opacity:0
			}
		}
	}

	const effectInView=(index)=>{
		if(index%2==0){
			return{
				x:0,
				opacity:1
			}
		}
		else{
			return{
				x:0,
				opacity:1
			}
		}
	}


	return (
		<section id="about" className="max-w-containerSmall mx-auto py-7 lgl:py-32 flex flex-col gap-8">
			<SectionTitle title="About Me"/>
			<div className="flex flex-col lgl:flex-row gap-16 xs:flex-col-reverse md:flex-col-reverse">
				<div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
					<motion.p 
						className=" text-textDark font-medium xs:text-justify md:text-left"
						initial={{opacity: 0, x: -30}}
						whileInView={{opacity: 1, x: 0}}
						transition={{duration: 0.8}}
					>{about}</motion.p>
					<motion.h3
						className="text-sm font-bolder font-titleFont tracking-wide text-gray-300"
						initial={{opacity: 0, y: 30}}
						whileInView={{opacity: 1, y: 0}}
						transition={{duration: 0.8}}
						>Technologies I've been using recently: </motion.h3>
					
					<div className="flex flex-col gap-2 justify-center">
							{
								skillData.map((skill,index) => (
									<motion.div 
										initial={effectInitial(index)}
										whileInView={effectInView(index)}
										transition={{duration: 1}}
										key={index} className="border border-textGreen w-full flex flex-col rounded-md gap-3 p-4">
											<span className=" text-textGreen">{skill.category}</span>
											<div className="flex gap-3 flex-wrap">
												{
													skillData[index].skills.map((skill, index) => (
														<div key={index} className="" style={{display:"flex"}}>
															<span className="flex items-center gap-1 font-titleFont font-bold tracking-wider text-gray-300"><BiSolidTagAlt className="text-sm text-textGreen"/>{skill}</span>
														</div>
													))
												}
											</div>

									</motion.div>
								))
							}
					</div>
				</div>

				<div className="w-full lgl:w-1/3 h-80 relative group">
					<div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
						<div className="w-full h-full relative flex pl-6 lgl:pl-0 xs:ml-6 md:ml-0">
							<Image src={avatar} alt="avatar" layout="fill" className="rounded-lg h-full object-contain z-20"/>
							<motion.div 
								initial={{y:-20,opacity: 1}}
								whileInView={{y:0,opacity: 1}}
								transition={{duration: 1}}
								className="hidden lgl:inline-block absolute w-full h-80 bg-[#bbfcef]
								rounded-md top-0 left-0 group-hover:bg-transparent duration-300">
							</motion.div>
							<motion.div 
								initial={{x:20,opacity: 0}}
								whileInView={{x:0,opacity: 1}}
								transition={{duration: 1}}
								className="hidden lgl:inline-block relative w-full h-80 border-2 border-textGreen
								rounded-md -z-30 top-3 left-3 lgl:group-hover:-translate-x-2 lgl:group-hover:-translate-y-2
								transition-transform duration-300">
							</motion.div>
						</div>
					</div>
				</div>
			</div>
			
		</section>
	)
};

export default About;
