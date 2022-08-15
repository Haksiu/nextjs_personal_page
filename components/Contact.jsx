import React from "react"
import {FaLinkedinIn, FaDiscord} from "react-icons/fa"
import {AiOutlineMail} from "react-icons/ai"
import {BsFillPersonLinesFill} from "react-icons/bs"

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
        <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#37b25a]">Contact</p>
        <h2 className="py-4">Contact</h2>
        <div className="grid lg:grid-cols-5 gap-8">
            {/* left */}
            <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-300 rounded-xl p-4">
                <div className="lg:p-4 h-full">
                    <div>
                        <h2 className="py-2">Haksiu</h2>
                        <p>Beginner Full-Stack Developer</p>
                        <p className="py-4">I am avaible for freelance position. Contact with me let&apos;s talk.</p>
                    </div>
                    <div>
                    <p className="uppercase pt-8">Connect With Me:</p>
                    <div className="flex items-center justify-between">
                        <div className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 easy-in duration-300">
                            <FaDiscord />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 easy-in duration-300">
                            <AiOutlineMail />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 easy-in duration-300">
                            <FaLinkedinIn />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-300 p-6 cursor-pointer hover:scale-110 easy-in duration-300">
                            <BsFillPersonLinesFill />
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Contact