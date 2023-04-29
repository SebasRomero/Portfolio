import React from 'react'
import Image from 'next/image';
import webGamingImg from "../../public/assets/projects/web_gaming.png";
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link';

const webgaming = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
        <Image src={webGamingImg} alt='/' className='absolute z-1' fill={true}/>
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Web Gaming</h2>
          <h3>ReactJS | Golang | TailwindCss</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>This simple page was made consuming with Golang (backend) a games api when I try to show
            my favorites games from my childhood, this using ReactJs and TailwindCss.
          </p>
          <Link href="https://github.com/SebasRomero/web_gaming">
          <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </Link>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Golang</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> ReactJs</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> TailwindCss</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> Fiber framework</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1'/> RapidApi Api</p>
            </div>
          </div>

        </div>
      </div>


    </div>
  )
}

export default webgaming