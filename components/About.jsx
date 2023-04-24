import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-teal-300'>About</p>
                <h2 className='py-4'>Who i Am</h2>
                <p className='py-2 text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, quae unde. Voluptates unde, eum eos mollitia consequatur laboriosam quo quaerat.</p>
                <p className='py-2 text-gray-600'>Lorem ipsum Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, odio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ipsam iure esse error porro quidem perspiciatis eaque quos recusandae pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, optio dolore iure unde ea iste sequi sunt possimus atque aperiam. Soluta quis reprehenderit itaque repudiandae velit sit eveniet, illum error! Iste non quaerat doloribus voluptates, veritatis magnam quisquam, eaque commodi magni dolor at temporibus neque culpa facere odio est vel. dolor sit amet consectetur adipisicing elit. Enim fugit consequatur corrupti facilis, repellat error?</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <Image className='rounded-xl'
                src="/../public/assets/software.png"
                width="900"
                height="200"
                alt="/"
              ></Image>
            </div>
        </div>
    </div>
  )
}

export default About