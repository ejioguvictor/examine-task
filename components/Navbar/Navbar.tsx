import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='flex border-x-4 border-red-500 lg:shadow-[0_0px_4px_0px_rgba(0,0,0,0.18)] content-center'>
      <div className="text-left font-bold basis-1/4 items-center my-auto pl-8">
        <span className="text-primary-color text-2xl">Examine</span>
      </div>
      <div className='flex flex-row gap-x-4 text-[#5E3B76] underline decoration-primary-color-400/30 text-base basis-1/2 py-4 px-3 bg-[#F6F6F6]'>
        <Image src="/img/searchIcon.svg" alt="" width={20} height={20}/>
        {/* <h2>What do you want to learn about?</h2> */}
        <div className='w-1/2 border-[0_0_1px_0] '>
          <input
            type="text"
            placeholder='What do you want to learn about?'
            className='bg-transparent w-full outline-none placeholder:text-[#5E3B76]'
            />
        </div>

      </div>
      <div className='flex basis-1/4 gap-8 justify-center'> 
        <button>Login</button>
        <button className='bg-[#FFD747] rounded-2xl w-[100px] p-1 my-auto'>Sign up</button>
        <Image src="/img/nav-icon.svg" alt="" width={20} height={20}/>


      </div>
    </div>
  )
}

export default Navbar