import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
      <div className='bg-[#5E3B76] text-white p-5 lg:p-20 lg:px-50 text-start place-content-center'>
        <div className='lg:w-5/6 xl:m-auto lg:p-5 md:p-5'>
        <h1 className='text-3xl leading-9 py-4'>Examine</h1>
          <div className="grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-2 lg:gap-[6rem] ">
            <div className='col-span-1 lg:col-span-2 p-2'>
            <h1 className='font-medium text-xl py-300'> <Link href="#"><a>Never miss an update!</a></Link> </h1>
              <p className='font-light text-[#E2D9F3] w-80 text-start leading-8'>We are always updating our research and adding new stuff. Sign-up and always stay on top of our updates!</p>
              
              <form action="">
              <div className='flex  flex-row justify-around items-center border-2 w-[80%] rounded-full p-2 px-0 gap-8  my-5'>
                <input type="text" placeholder='Your Email Address' className='bg-transparent outline-0' />
                <div className='h-[45px] w-[45px] rounded-full bg-white flex justify-center items-center'>
                <Image  src="/img/arrow.svg" alt="" width={20} height={20}/>
                </div>
              </div>
              </form>

            </div>
            <div className='leading-8 col-span-1 lg:col-span-1 p-2'>
              <h1 className='font-medium text-xl leading-9 whitespace-nowrap'> <Link href="#"><a>About Us</a></Link> </h1>
              <p className='font-light text-[#E2D9F3] whitespace-nowrap' ><Link href="#"><a>Our Story</a></Link></p>
              <p className='font-light text-[#E2D9F3] whitespace-nowrap' ><Link href="#"><a>Our Team</a></Link></p>
              <p className='font-light text-[#E2D9F3] whitespace-nowrap' ><Link href="#"><a>Our Editorial Policy</a></Link></p>
              <p className='font-light text-[#E2D9F3] whitespace-nowrap' ><Link href="#"><a>Our Mistakes</a></Link></p>

            </div>
            <div className='leading-8 col-span-1 lg:col-span-1 p-2'>
            <h1 className='font-medium text-xl leading-9'> <Link href="#"><a>Resources</a></Link> </h1>
            <p className='font-light text-[#E2D9F3] whitespace-nowrap' ><Link href="#"><a>Continuing Education</a></Link></p>
              <p className='font-light text-[#E2D9F3] whitespace-nowrap' ><Link href="#"><a>For Journalists</a></Link></p>
              <p className='font-light text-[#E2D9F3] whitespace-nowrap' ><Link href="#"><a>Students Discount</a></Link></p>
              <p className='font-light text-[#E2D9F3] whitespace-nowrap' ><Link href="#"><a>Senior Discount</a></Link></p>
            </div>
            <div className='leading-8col-span-1 lg:col-span-1 p-2'>
            <h1 className='font-medium text-xl leading-9'> <Link href="#"><a>Social</a></Link> </h1>
            <p className='font-light text-[#E2D9F3]' ><Link href="#"><a>Facebook</a></Link></p>
              <p className='font-light text-[#E2D9F3]' ><Link href="#"><a>Twitter</a></Link></p>
              <p className='font-light text-[#E2D9F3]' ><Link href="#"><a>Linkedin</a></Link></p>
              <p className='font-light text-[#E2D9F3]' ><Link href="#"><a>Email Us</a></Link></p>
            </div>
          </div>
          <div className='lg:flex flex-row py-10 w-[90%] text-[#E2D9F3] leading-5 justify-between'>
            <p  className='text-center my-2'>Copyright 2010 - 2021 Examine Inc.</p>
            <p className='text-center  my-2'>Privacy Policy  I  Website Terms</p>
          </div>
        </div>
      
      </div>
    </>
  )
}

export default Footer;