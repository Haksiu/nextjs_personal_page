import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 '>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#37b25a]'>About me</p>
                <h2 className='py-4'>Who I Am?</h2>
                <p className='py-2 text-gray-600'>Hi, my name is Adrian but in internet I am known by nickname Haksiu and I'm developer from Poland.
                    I'm 20 years old and my dream is to become a full-stack developer.
                </p>
                <p className='py-2 text-gray-600'>
                My first programming adventure began when I was 14 years old.
                That's when I created my first website.
                In 2016 I started working on HTML&CSS to make some websites.
                </p>
                <p className='py-2 text-gray-600'>
                    In 2018 I started learning other programming language like: C#, JavaScript, PHP, Java.

                </p>
                <p className='py-2 text-gray-600 underline cursor-pointer'><a href="https://github.com/haksiu" target="_blank">Check out some my projects on GitHub </a></p>
            </div>
        </div>
    </div>
  )
}

export default About
