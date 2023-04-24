
import React from "react";
import webGaming from "../public/assets/projects/web_gaming.png";
import webNews from "../public/assets/projects/news.png"
import reactForm from "../public/assets/projects/form_react.png"
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-teal-300">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            tittle="Gaming Web"
            description="ReactJS and Golang"
            backgroundImg={webGaming}
            projectUrl="/webgaming"
          />
          <ProjectItem
            tittle="News Web"
            description="HTML and CSS"
            backgroundImg={webNews}
            projectUrl="/webnews"
          />
          <ProjectItem
            tittle="ReactJS"
            description="ReactJS"
            backgroundImg={reactForm}
            projectUrl="/reactform"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
