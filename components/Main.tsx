import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-teal-300">Sebastian</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Back-end Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a back-end developer who is interested to do all about
            software creation, who's always trying to learn new 
            technologies to be able to use in my projects.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link href="https://github.com/SebasRomero">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursos-pointer hover:scale-125 ease-in duration-300">
              <FaGithub/>
            </div>
            </Link>
            <Link href="https://www.linkedin.com/in/sebastian-romero-0a8b57128/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursos-pointer hover:scale-125 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            </Link>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursos-pointer hover:scale-125 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursos-pointer hover:scale-125 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
