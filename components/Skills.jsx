import React from "react"
import Image from "next/image"

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#37b25a]">Skills</p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 easy-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                    <div className="m-auto">
                        <Image src="/assets/html.png" width="64px" height="64px"  alt="/" unoptimized={true}/>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h3>HTML</h3>
                    </div>
                </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 easy-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                    <div className="m-auto">
                        <Image src="/assets/css.png" width="64px" height="64px"  alt="/" unoptimized={true}/>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h3>CSS</h3>
                    </div>
                </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 easy-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                    <div className="m-auto">
                        <Image src="/assets/javascript.png" width="64px" height="64px"  alt="/" unoptimized={true}/>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h3>JavaScript</h3>
                    </div>
                </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 easy-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                    <div className="m-auto">
                        <Image src="/assets/next.png" width="64px" height="64px"  alt="/" unoptimized={true}/>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h3>NextJS</h3>
                    </div>
                </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 easy-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                    <div className="m-auto">
                        <Image src="/assets/node.png" width="64px" height="64px"  alt="/" unoptimized={true}/>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h3>NodeJS</h3>
                    </div>
                </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 easy-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                    <div className="m-auto">
                        <Image src="/assets/php.png" width="64px" height="64px"  alt="/" unoptimized={true}/>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h3>PHP</h3>
                    </div>
                </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 easy-in duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                    <div className="m-auto">
                        <Image src="/assets/react.png" width="64px" height="64px"  alt="/" unoptimized={true}/>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h3>ReactJS</h3>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
