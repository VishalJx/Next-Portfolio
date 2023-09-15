import React from "react"
import {FiMail} from "react-icons/fi"

function RightComponent(){
  return (
    <div className="w-full h-full flex flex-col items-center justify-end
    gap-9 text-textLight">
      <FiMail className="text-2xl fixed bottom-80"/>
      <a href="mailto:itsmevishal360@gmail.com">
        <p className="text-sm rotate-90 w-72 tracking-wide text-textGreen">itsmevishal360@gmail.com</p>
      </a>
      <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  )
};

export default RightComponent;
