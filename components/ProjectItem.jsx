import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = (props) => {
  return (
    <div className="relative flex flex-items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-teal-300 to to-teal-200">
      <Image className="rounded-xl group-hover:opacity-10" src={props.backgroundImg} alt="/"/>
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-3xl text-white tracking-wider text-center">
          {props.tittle}
        </h3>
        <p className="text-xl pb-4 pt-2 text-white text-center">
          {props.description}
        </p>
        <Link href={props.projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
