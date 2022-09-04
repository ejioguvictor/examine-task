import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <div className='bg-[#5E3B76] text-white p-10 lg:p-20 lg:px-50 text-start place-content-center'>
        <h1 className='text-3xl leading-9 py-4'>Examine</h1>
        <div className="grid lg:grid-cols-4">
          <div>
          <h1 className='font-medium text-xl py-300'> <Link href="#"><a>Never miss an update!</a></Link> </h1>
            <p className='font-light text-[#E2D9F3] w-80 text-start leading-8'>We are always updating our research and adding new stuff. Sign-up and always stay on top of our updates!</p>
          </div>
          <div className='leading-8 '>
            <h1 className='font-medium text-xl leading-9'> <Link href="#"><a>About Us</a></Link> </h1>
            <p className='font-light text-[#E2D9F3]' ><Link href="#"><a>Our Story</a></Link></p>
            <p className='font-light text-[#E2D9F3]' ><Link href="#"><a>Our Team</a></Link></p>
            <p className='font-light text-[#E2D9F3]' ><Link href="#"><a>Our Editorial Policy</a></Link></p>
            <p className='font-light text-[#E2D9F3]' ><Link href="#"><a>Our Mistakes</a></Link></p>

          </div>
          <div className='leading-8'>
          <h1 className='font-medium text-xl leading-9'> <Link href="#"><a>Resources</a></Link> </h1>
          <p className='font-light text-[#E2D9F3]' ><Link href="#"><a>Continuing Education</a></Link></p>
            <p className='font-light text-[#E2D9F3]' ><Link href="#"><a>For Journalists</a></Link></p>
            <p className='font-light text-[#E2D9F3]' ><Link href="#"><a>Students Discount</a></Link></p>
            <p className='font-light text-[#E2D9F3]' ><Link href="#"><a>Senior Discount</a></Link></p>
          </div>
          <div className='leading-8'>
          <h1 className='font-medium text-xl leading-9'> <Link href="#"><a>Social</a></Link> </h1>
          <p className='font-light text-[#E2D9F3]' ><Link href="#"><a>Facebook</a></Link></p>
            <p className='font-light text-[#E2D9F3]' ><Link href="#"><a>Twitter</a></Link></p>
            <p className='font-light text-[#E2D9F3]' ><Link href="#"><a>Linkedin</a></Link></p>
            <p className='font-light text-[#E2D9F3]' ><Link href="#"><a>Email Us</a></Link></p>
          </div>
        </div>
        <div className='flex flex-row py-10 text-[#E2D9F3] leading-5 place-content-stretch'>
          <p>Copyright 2010 - 2021 Examine Inc.</p>
          <p className=''>Privacy Policy  I  Website Terms</p>
        </div>
      </div>
    </>
  )
}

export default Footer;