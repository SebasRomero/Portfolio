import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-teal-300'>About</p>
                <h2 className='py-4'>Who i Am</h2>
                <p className='py-2 text-gray-600'>I'm a Junior Developer who is in love with the programming and the
                application development. I'm studying Systems Engineer in Colombia, learning about everything I can, to 
                be able to use it in my real life as a Full-Stack Developer.</p>
                <p className='py-2 text-gray-600'>I have been programing since 2017, I learned with Pseint and Visual Basic, 
                then I was learning Java and all about OOP, inheritance, etc. Then I learned about data structures, database 
                managment with MySql, doing querys and connections. I know about REST API, how to create them, 
                use them, etc. I know about AWS, Docker, Golang, Typescript, NestJs... Mostly are about Backend, because it's
                my favorite side and I think that my performance is better with in it. I invite you to check them all in my github.
                </p>
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