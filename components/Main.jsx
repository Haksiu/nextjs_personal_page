import React from "react"
import {FaGithub, FaDiscord} from "react-icons/fa"
import {AiOutlineMail} from "react-icons/ai"
import Link from "next/link"

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
            <div>
                <p className="uppercase text-sm tracking-widest text-gray-600">This is my dream portfolio website</p>
                <h1 className="py-4 text-gray-800">
                    Hi, I&apos;m <span className="text-[#37b25a]">Haksiu</span>
                    </h1>
                    <h1 className="py-2 text-gray-800">
                        A Beginner Full-Stack Developer
                    </h1>
                    <p className="py-4 text-gray-400 max-w-[70%] m-auto">
                        I&apos;m beginner full-stack developer, streamer, content creator, begginer vfx artist, beginner logo designer, film maker.
                        Currently, I&apos;m focused on building full-stack web applications but I am still learning this.
                    </p>
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 easy-in duration-300">
                            <a href="https://github.com/haksiu" target="_blank" rel="noreferrer"><FaGithub /></a>
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 easy-in duration-300">
                              <a href="https://discord.gg/hQKyBfh4Ca" target="_blank" rel="noreferrer"><FaDiscord /> </a>
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 easy-in duration-300">
                            <AiOutlineMail />
                        </div>
                        
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Main
