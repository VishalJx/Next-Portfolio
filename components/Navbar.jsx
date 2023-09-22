"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "../public/logo.png";
import {MdOutlineClose} from "react-icons/md";
import { resume } from "@/data";

function Navbar(){
    const ref = useRef("");
    const [open, setOpen] = useState(false);

  const handleScroll = (e) => {
      e.preventDefault();
      const href = e.currentTarget.href;
      const targetId = href.replace(/.*\#/, "");
      const target = document.getElementById(targetId);
      target.scrollIntoView({ behavior: "smooth" });

      const navLinks = document.querySelectorAll(".nav-link");
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      e.currentTarget.classList.add("active");
  }

  return (
    <div className="w-full h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-8 shadow-customDark">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}>
          <Image src={logo} alt="logo" width={100} height={100}/>
        </motion.div>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[13px] gap-7">
            <Link href="#home"
                  className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                  onClick={handleScroll}>
              <motion.li 
                initial={{y:-10, opacity:0}} 
                animate={{y:0, opacity:1}} 
                transition={{duration: 0.2}}>
                  Home
              </motion.li>
            </Link>

            <Link href="#about"
                  className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                  onClick={handleScroll}>
              <motion.li 
                initial={{y:-10, opacity:0}} 
                animate={{y:0, opacity:1}} 
                transition={{duration: 0.4}}>
                  About
              </motion.li>            
            </Link>

            <Link href="#experience"
                  className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                  onClick={handleScroll}>
              <motion.li 
                initial={{y:-10, opacity:0}} 
                animate={{y:0, opacity:1}} 
                transition={{duration: 0.6}}>
                  Experience
              </motion.li>
            </Link>

            <Link href='#projects'
                  className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                  onClick={handleScroll}>
              <motion.li 
                initial={{y:-10, opacity:0}} 
                animate={{y:0, opacity:1}} 
                transition={{duration: 0.8}}>
                  Projects
              </motion.li>
            </Link>
            
            <Link href='#contact'
                  className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                  onClick={handleScroll}>
              <motion.li 
                initial={{y:-10, opacity:0}} 
                animate={{y:0, opacity:1}} 
                transition={{duration: 1}}>
                  Contact Me
              </motion.li>
            </Link>

            <motion.button                 
                initial={{y:-10, opacity:0}} 
                animate={{y:0, opacity:1}} 
                transition={{duration: 1.2}}
                className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-textGreen hover:text-bodyColor cursor-pointer duration-300"
                >
                <a href={resume} target="_blank">Resume</a>
            </motion.button>
          </ul>
        </div>
      {/*Ham Icon */}
        <div onClick={()=>setOpen(true)}
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden
          text-4xl text-textGreen cursor-pointer overflow-hidden group">
          <span className="w-full h-[2px] bg-textGreen inline-flex transform
          group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform
          group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform
          group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
        {
          open && (
            <div ref={(node)=>(ref.current = node)}
                className="absolute mdl:hidden top-0 right-0 w-full h-screen
                 bg-black bg-opacity-50 flex flex-col items-end">
                <motion.div
                  initial={{x:20, opacity:0}}
                  animate={{x:0, opacity:1}}
                  transition={{duration:0.2}}
                  className="w-[80%] h-full overflow-y-hidden bg-[#112240]
                  flex flex-col items-center justify-center px-4 relative"
                  >
                  <MdOutlineClose 
                    onClick={()=>setOpen(false)}
                    className="text-3xl text-textGreen cursor-pointer
                    hover:text-red-500 absolute top-4 right-4"/>
                  <div>
                        <ul className="flex flex-col text-center text-[20px] gap-8">
                          <Link href="#home"
                                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                                onClick={handleScroll}>
                            <motion.li onClick={()=>setOpen(false)}
                              initial={{y:-10, opacity:0}} 
                              animate={{y:0, opacity:1}} 
                              transition={{duration: 0.2, ease:"easeIn"}}>
                                <span className="text-textGreen">01.</span>
                                Home
                            </motion.li>
                          </Link>

                          <Link href="#about"
                                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                                onClick={handleScroll}>
                            <motion.li onClick={()=>setOpen(false)}
                              initial={{y:-10, opacity:0}} 
                              animate={{y:0, opacity:1}} 
                              transition={{duration: 0.4, ease:"easeIn"}}>
                              <span className="text-textGreen">02.</span>
                                About
                            </motion.li>            
                          </Link>

                          <Link href="#experience"
                                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                                onClick={handleScroll}>
                            <motion.li onClick={()=>setOpen(false)}
                              initial={{y:-10, opacity:0}} 
                              animate={{y:0, opacity:1}} 
                              transition={{duration: 0.6, ease:"easeIn"}}>
                                <span className="text-textGreen">03.</span>
                                Experience
                            </motion.li>
                          </Link>

                          <Link href='#projects'
                                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                                onClick={handleScroll}>
                            <motion.li onClick={()=>setOpen(false)}
                              initial={{y:-10, opacity:0}} 
                              animate={{y:0, opacity:1}} 
                              transition={{duration: 0.8, ease:"easeIn"}}>
                                <span className="text-textGreen">04.</span>
                                Projects
                            </motion.li>
                          </Link>
                          
                          <Link href='#contact'
                                className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
                                onClick={handleScroll}>
                            <motion.li onClick={()=>setOpen(false)}
                              initial={{y:-10, opacity:0}} 
                              animate={{y:0, opacity:1}} 
                              transition={{duration: 1, ease:"easeIn"}}>
                                <span className="text-textGreen">05.</span>
                                Contact Me
                            </motion.li>
                          </Link>

                          <motion.button                 
                              initial={{y:-10, opacity:0}} 
                              animate={{y:0, opacity:1}} 
                              transition={{duration: 1.2, ease:"easeIn"}}
                              className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-textGreen hover:text-bodyColor cursor-pointer duration-300"
                              >
                            <a href={resume} target="_blank">Resume</a>
                          </motion.button>
                        </ul>
                  </div>
                </motion.div>
            </div>
          )
        }
      </div>
    </div>
  )
};

export default Navbar;
