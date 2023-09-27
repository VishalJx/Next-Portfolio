'use client'
import Projects from "@/components/Projects";
import About from "@/components/About";
import Banner from "@/components/Banner";
import LeftComponent from "@/components/LeftComponent";
import RightComponent from "@/components/RightComponent";
import {motion} from "framer-motion";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import {TbFidgetSpinner} from "react-icons/tb";
import {useEffect, useState} from "react";

export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
    {
      loading ? (
      <motion.div 
        initial={{opacity:1}}
        animate={{opacity:0}}
        transition={{duration:2}}

        className="w-full h-full fixed bg-[#51515111] z-3 flex flex-col justify-center items-center gap-10">
        <div>
          <h1 className="text-[#e4cdf7] text-4xl font-titleFont font-bolder text-center tracking-wide"><span className="text-textGreen">VishalJx</span><br/> Welcomes You !!</h1>
        </div>
        <div className="flex justify-center items-center mb-40">
          <TbFidgetSpinner className="w-20 h-20 animate-spin text-[#ffffff] mx-auto my-auto"/>
        </div>
      </motion.div>)
      :
      (
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
    </>
  )
}