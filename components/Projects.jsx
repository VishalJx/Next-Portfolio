import React from "react"
import SectionTitle from "./SectionTitle";
import ProjectDesc from "./works/ProjectDesc";


function Projects(){
  return (
    <section id="projects" className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8">
      <SectionTitle title="Projects"/>
      <div>
        <ProjectDesc/>
    </div>
    </section>
  )
};

export default Projects;
