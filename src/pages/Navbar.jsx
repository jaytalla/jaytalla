import React from 'react'

const Navbar = () => {
  return (
    <div className='z-50 flex justify-between absolute w-full h-[70px] '>
        {/* LOGO CONTAINER  */}
        <div className='ml-60 flex justify-center items-center rounded-bl-[100px] rounded-br-[100px] w-fit px-[100px] h-[200px] bg-jt-warm'>
            <p className='text-8xl text-jt-white'>j</p>
            <p className='text-9xl text-jt-white  -ml-5 mt-[3.6rem]'>J</p>
        </div>
          <ul className='flex mt-10 mr-60 space-x-5 text-jt-white'>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Blogs</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar