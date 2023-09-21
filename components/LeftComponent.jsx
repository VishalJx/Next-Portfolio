import React from "react"
import {TbBrandGithub,TbBrandLinkedin,TbBrandTwitter} from 'react-icons/tb'

function LeftComponent(){
  return (
    <div className="flex flex-col items-center gap-5 h-30">
        <div className="flex flex-col gap-4">
            <a href="https://github.com/VishalJx" target="_blank">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full
                inline-flex items-center justify-center hover:text-textGreen cursor-pointer
                hover:-translate-y-2 transition-all duration-300">
                    <TbBrandGithub/>
                </span>
            </a>
            <a href="https://www.linkedin.com/in/vishaljx/" target="_blank">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full
                    inline-flex items-center justify-center hover:text-textGreen cursor-pointer
                    hover:-translate-y-2 transition-all duration-300">
                    <TbBrandLinkedin/>
                </span>
            </a>
            <a href="https://twitter.com/vishaljx_" target="_blank">
                <span className="w-10 h-10 text-xl bg-hoverColor rounded-full
                    inline-flex items-center justify-center hover:text-textGreen cursor-pointer
                    hover:-translate-y-2 transition-all duration-300">  
                    <TbBrandTwitter/>
                </span>
            </a>
        </div>
        <div className="w-[2px] h-32 bg-textDark"></div>
    </div>
  )
};

export default LeftComponent;
