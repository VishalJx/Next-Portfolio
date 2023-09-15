"use client";

import React from "react";
import Link from "next/link";
import {motion} from "framer-motion";
import HamIcon from "./HamIcon";

function Navbar(){
  return (
    <div className="w-full h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}}>
          Image
        </motion.div>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[13px] gap-7">
            <Link href='#home'
                  className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
              <motion.li 
                initial={{y:-10, opacity:0}} 
                animate={{y:0, opacity:1}} 
                transition={{duration: 0.2}}>
                  Home
              </motion.li>
            </Link>

            <Link href='#about'
                  className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
              <motion.li 
                initial={{y:-10, opacity:0}} 
                animate={{y:0, opacity:1}} 
                transition={{duration: 0.4}}>
                  About
              </motion.li>            
            </Link>

            <Link href='#experience'
                  className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
              <motion.li 
                initial={{y:-10, opacity:0}} 
                animate={{y:0, opacity:1}} 
                transition={{duration: 0.6}}>
                  Experience
              </motion.li>
            </Link>

            <Link href='#projects'
                  className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link">
              <motion.li 
                initial={{y:-10, opacity:0}} 
                animate={{y:0, opacity:1}} 
                transition={{duration: 0.8}}>
                  Projects
              </motion.li>
            </Link>

            <motion.button                 
                initial={{y:-10, opacity:0}} 
                animate={{y:0, opacity:1}} 
                transition={{duration: 1}}
                className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-textGreen hover:text-bodyColor cursor-pointer duration-300"
                >
              Resume
            </motion.button>
          </ul>
        </div>
      {/*Ham Icon */}
      <HamIcon/>
      </div>
    </div>
  )
};

export default Navbar;
