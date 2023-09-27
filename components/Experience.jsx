import React, {useState} from "react"
import SectionTitle from "./SectionTitle";
import Works from "./works/Works";
import { workPlaces } from "@/data";
import { motion } from "framer-motion";

function Experience(){

  const [data, setData] = useState(0);
  const [highlight, setHighlight] = useState(true);

  const handleWork = (e) => {
    if(e.target.textContent === "RA Creators"){
      setData(0);
    }
    else if(e.target.textContent === "GSSoC"){
      setData(1);
    }
    else if(e.target.textContent === "Google"){
      setData(2);
    }
    setHighlight(!highlight);

  }

  return (
    <section id="experience" className="max-w-containerxs mx-auto py-12 lgl:py-20 flex flex-col gap-8">
      <SectionTitle title="Experience" />
      <motion.div 
        className= "w-full mt-10 flex flex-col md:flex-row gap-16"
        initial={{y:-15 ,opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:2}}
        >
        <ul className=" md:w-35 flex flex-col">
          {
            workPlaces.map((work) => (
              <li onClick={handleWork} key={work.id} 
                className={`${work.id===data+1 ?"text-textGreen border-l-textGreen":"text-textDark border-l-textDark"} border-l-2  bg-transparent
                hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                  {work.company}
              </li>
            ))
          }
        </ul>
        <Works workNumber={data}/>
      </motion.div>

      
    </section>
  )
};

export default Experience;
