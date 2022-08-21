import React from 'react'

const Footer = () => {
    return ( 
        <div className='flex w-full h-20 bg-[#dfe2e6] items-center justify-center'>
        <p >
           &copy; Haksiu 2022- {new Date().getFullYear()}
        </p>
        </div>
    )

}

export default Footer