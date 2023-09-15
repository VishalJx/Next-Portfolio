import React, {useState} from "react"
import SectionTitle from "./SectionTitle";
import { skillData } from "@/data";
import Image from "next/image";

function About(){
  const [activeIndex, setActiveIndex] = useState(0);
  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? skillData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === skillData.length - 1 ? 0 : prevIndex + 1));
  };

  const currentSkills = skillData[activeIndex].skills;

  const carouselStyles = {
    transform: `translateX(-${activeIndex}%)`,
    transition: 'transform 0.4s ease',
  };

  return (
    <section id="about" className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8">
      <SectionTitle title="About Me"/>
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia hic soluta inventore saepe, officiis, corporis consequatur magnam maiores laborum nesciunt incidunt aspernatur. Ipsam aliquam itaque fugit cumque voluptas quidem exercitationem veniam. Officia hic laborum nemo molestiae quas labore? Sit sint delectus quia voluptas totam temporibus corporis ea. Corrupti, illo exercitationem?</p>
          <h3>Technologies I've been using recently: </h3>
          
          <div className="border border-textGreen w-[250px] min-h-[160px] max-h-[240px] flex justify-center">
            <div className="flex flex-col items-center gap-2 py-3" style={carouselStyles}>
              <h4 className="mb-0 pb-0 font-boldest">{skillData[activeIndex].category}</h4>
              <ul className="max-w-[450px] h-[140px] text-sm font-titleFont grid grid-cols-2 gap-4 mt-4 pt-0">
                {currentSkills.map((skill,index)=>
                  <li className="flex item-center gap-5" key={index}>
                    <span></span>
                    {skill}
                  </li>
                )}
              </ul>
              <div className="flex gap-6">
                <button onClick={handlePrev} className="bg-textGreen w-[20px] h-[20px] flex items-center justify-center rounded"><span className="text-black">{"<"}</span></button>
                <button onClick={handleNext} className="bg-textGreen w-[20px] h-[20px] flex items-center justify-center rounded"><span className="text-black">{">"}</span></button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
              className="rounded-lg h-full object-cover border" src="" alt="V"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen
                rounded-md top-0 left-0 group-hover:bg-transparent duration-300">
              </div>
              <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen
                rounded-md group-hover:translate-x-2 group-hover:translate-y-2
                tramsition=transform duration-300">

              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
};

export default About;
