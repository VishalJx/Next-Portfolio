'use client'
import Projects from "@/components/Projects";
import About from "@/components/About";
import Banner from "@/components/Banner";
import LeftComponent from "@/components/LeftComponent";
import RightComponent from "@/components/RightComponent";
import {motion} from "framer-motion";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
      <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1.5}}
        className="hidden xl:inline-flex w-32 h-full fixed items-end top-3 left-10">
        <LeftComponent/>
      </motion.div>

      <div className="h-[88vh] w-full mx-auto px-5 py-4">
        <Banner/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>

      <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1.5}}
        className="hidden xl:inline-flex w-32 h-full fixed items-end top-3 right-10">
        <RightComponent/>
      </motion.div>
    </main>
  )
}