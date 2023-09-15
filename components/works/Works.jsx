import React from "react"
import {motion} from "framer-motion"
import {TiArrowForward} from "react-icons/ti"
import { works } from "@/data";

function Works({workNumber}){

  const workPoints = works[workNumber][0].points;

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.1}}
      className="w-full"
    >
      {
        works[workNumber].map((work, index) => (
          <div key={index}>
            <h3 className="flex gap-1 font-medium text-xl font-titleFont">
              {work.title} 
              <span className="text-textGreen tracking-wide">@{work.company}</span>
            </h3> 
            <p className="text-sm mt-1 font-medium text-textDark">{work.date}</p>
            <ul className="mt-6 flex flex-col gap-3">
              <li className="text-base flex flex-col gap-2 text-textDark">
                  {workPoints.map((desc, index) => (
                    <div className="flex gap-2 items-center">
                      <span>
                        <TiArrowForward className="text-textGreen"/>
                      </span>
                      <span key={index}>{desc}</span>
                    </div>
                  ))}
              </li>
            </ul>
          </div>
        )
      )}
    </motion.div>
  )
};

export default Works;
