import React, {useState} from "react"
import SectionTitle from "./SectionTitle";
import Works from "./works/Works";
import { workPlaces } from "@/data";

function Experience(){

  const [data, setData] = useState(0);

  const handleWork = (e) => {
    if(e.target.textContent === "RA Creators"){
      console.log("RA Creators");
      setData(0);
    }
    else if(e.target.textContent === "Apple"){
      console.log("Apple");
      setData(1);
    }
    else if(e.target.textContent === "Google"){
      console.log("Google");
      setData(2);
    }

  }

  return (
    <section id="experience" className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4">
      <SectionTitle title="Experience" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-35 flex flex-col">
          {
            workPlaces.map((work) => (
              <li onClick={handleWork} key={work.id} className="border-l-2 border-l-textGreen text-textDark bg-transparent
                hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium">
                  {work.company}
              </li>
            ))
          }
        </ul>
        <Works workNumber={data}/>
      </div>

      
    </section>
  )
};

export default Experience;
