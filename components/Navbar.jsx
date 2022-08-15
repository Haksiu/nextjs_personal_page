import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }


useEffect(() => {
  const handleShadow = () => {
    if(window.scrollY >= 90) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  }
  window.addEventListener('scroll', handleShadow);
}, [])

  return (
    <div className={shadow ? "fixed w-full h-20 shadow-xl z-[100] bg-[#dfe2e6]" : "fixed w-full h-20 z-[100] bg-[#dfe2e6]"}>
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
          LOGO PLACEHOLDER
          <div>
              <ul className='hidden md:flex'>
                <Link href="/">
                    <li className='ml-10 text-sm uppercase font-bold text-gray-700'>Home</li>
                </Link>
                <Link href="/#about">
                    <li className='ml-10 text-sm uppercase font-bold text-gray-700'>About</li>
                </Link>
                <Link href="/#skills">
                    <li className='ml-10 text-sm uppercase font-bold text-gray-700'>Skills</li>
                </Link>
                <Link href="/#contact">
                    <li className='ml-10 text-sm uppercase font-bold text-gray-700'>Contact</li>
                </Link>
              </ul>
              <div onClick={handleNav} className='md:hidden' >
                <AiOutlineMenu size={25}/>
              </div>
          </div>
        </div>
        <div 
        className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}
          >
          <div className={nav ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#edeff2] p-10 easy-in duration-500' : 
        'fixed left-[-100%] top-0 p-10 easy-in duration-500'}>
            <div>
              <div className='flex justify-between items-center w-full'>
                  LOGO PLACEHOLDER
                  <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                    <AiOutlineClose />
                  </div>
              </div>
              <div className='border-b border-gray-300 my-4 '>
                <p className='w-[85%] md:w-[90%] py-4'>This is my dream portfolio website</p>
              </div>
            </div>

            <div className='py-4 flex flex-col'>
              <ul className='uppercase'>
                <Link href="/" >
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li>
                </Link>
                <Link href="/#about" >
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>About</li>
                </Link>
                <Link href="/#skills" >
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>Skills</li>
                </Link>
                <Link href="/#contact" >
                  <li onClick={() => setNav(false)} className='py-4 text-sm'>Contact</li>
                </Link>
              </ul>
            </div>

          </div>

        </div>
    </div>
  )
}

export default Navbar