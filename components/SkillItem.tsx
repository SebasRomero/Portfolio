import Image from 'next/image'
import React from 'react'


const SkillItem = (props) => {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={props.image}
                  width={props.width}
                  height={props.height}
                  alt="/"
                ></Image>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>{props.tittle}</h3>
              </div>
            </div>
          </div>
  )
}

export default SkillItem