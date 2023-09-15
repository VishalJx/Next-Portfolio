import React from "react";

function HamIcon(){
  return (
    <div className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden
    text-4xl text-textGreen cursor-pointer overflow-hidden group">
      <span className="w-full h-[2px] bg-textGreen inline-flex transform
      group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
      <span className="w-full h-[2px] bg-textGreen inline-flex transform
      group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
      <span className="w-full h-[2px] bg-textGreen inline-flex transform
      group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
    </div>
  )
};

export default HamIcon;
