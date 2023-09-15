import React from "react";
import {motion} from "framer-motion";

function Banner(){
  return (
    <section id='home' className="max-w-contentContainer mx-auto py-10 mdl:py-24
        flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
       <motion.h3
        initial={{opacity: 0, y:10}}
        animate={{opacity: 1, y:0}}
        transition={{delay: 0.5, duration: 0.6}}
        className="text-lg font-titleFont tracking-wide text-textGreen">Hi, my name is</motion.h3>
       <motion.h1
        initial={{opacity: 0, y:10}}
        animate={{opacity: 1, y:0}}
        transition={{delay: 0.5, duration: 0.6}}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col">Vishal V. Jaiswal.{" "}
            <span className="text-textDark mt-2 lgl:mt-4">
                I'm a Full Stack Developer.
            </span>
        </motion.h1>
        <motion.p
            initial={{opacity: 0, y:10}}
            animate={{opacity: 1, y:0}}
            transition={{delay: 0.5, duration: 0.6}}
            className="text-base md:max-w-[650px] text-textDark font-medium">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nisi iste obcaecati numquam, aperiam soluta omnis illum nobis quidem minima voluptas eaque neque saepe autem perspiciatis porro reiciendis distinctio quo.{" "}
            {/* <a href=""><span>Learn more..</span></a> */}
        </motion.p>
        <motion.button 
            initial={{opacity: 0, y:10}}
            animate={{opacity: 1, y:0}}
            transition={{delay: 0.5, duration: 0.6}}
            className="w-52 h-14 text-sm font-titleFont border border-textGreen
            rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300">Check out my Projects!</motion.button>
    </section>
  )
};

export default Banner;
// 9979587256
