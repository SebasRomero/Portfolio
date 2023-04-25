import Image from "next/image";
import React from "react";
import Go from "../public/assets/skills/go.png"
import Js from "../public/assets/skills/javascript.png"
import Docker from "../public/assets/skills/docker.png"
import Git from "../public/assets/skills/git.png"
import MongoDB from "../public/assets/skills/mongodb.jpeg"
import Html from "../public/assets/skills/html.png"
import Linux from "../public/assets/skills/linux.png"
import Typescript from "../public/assets/skills/typescript.png"
import Tailwindcss from "../public/assets/skills/tailwindcss.png"
import Nest from "../public/assets/skills/nest.png"
import Aws from "../public/assets/skills/aws.png"
import MySql from "../public/assets/skills/mysql.png"
import Firebase from "../public/assets/skills/firebase.png"
import SkillItem from "./SkillItem";


const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-2xl tracking-widest uppercase text-teal-300">
          Skills
        </p>
        <h2 className="py-4">What can I do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <SkillItem image={Go} tittle='Golang'width="120" height="60"/>
        <SkillItem image={Js} tittle='Javascript'width="60" height="60"/>
        <SkillItem image={Git} tittle='Git' width="80" height="60"/>
        <SkillItem image={Docker} tittle='Docker' width="100" height="60"/>
        <SkillItem image={MongoDB} tittle='MongoDB' width="120" height="60"/>
        <SkillItem image={Html} tittle='HTML' width="60" height="60"/>
        <SkillItem image={Tailwindcss} tittle='TailwindCSS' width="100" height="60"/>
        <SkillItem image={Nest} tittle='Nest' width="115" height="60"/>
        <SkillItem image={Firebase} tittle='Firebase' width="120" height="60"/>
        <SkillItem image={Typescript} tittle='Typescript' width="60" height="60"/>
        <SkillItem image={Aws} tittle='AWS' width="90" height="60"/>
        <SkillItem image={MySql} tittle='MySQL' width="60" height="60"/>
        <SkillItem image={Linux} tittle='Linux' width="90" height="60"/>
        </div>
      </div>
    </div>
  );
};

export default Skills;
