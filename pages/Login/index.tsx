import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import Navbar from "../../components/Navbar/Navbar";

const LoginForm = () => {
  return (
    <>
     <Navbar />
      <div className="flex justify-center align-center h-screen">
        <div className="m-auto p-7  flex flex-col items-center rounded-3xl lg:drop-shadow-2xl">
          <h1 className="font-serif text-xl pb-2 lg:text-5xl lg:pb-6">Welcome back! 👋</h1>
          <p className="text-sm leading-6 text-examine-gray lg:text-xl lg:pb-6">Let's build something great</p>
          <div className="flex flex-row gap-5 p-5 pb-2">
              
              <Link href="#"><a className="shadow py-2 h-30 w-30 px-3 pb-1 rounded-lg  lg:py-4 lg:px-6"><Image src="/img/search 1.svg" alt="" width={20} height={20}/></a></Link>
              <Link href="#"><a className="shadow py-2 px-3 pb-1 rounded-lg lg:py-4 lg:px-6"><Image src="/img/path4.svg" alt="" width={20} height={20}/></a></Link>
              <Link href="#"><a className="shadow py-2 px-3 pb-1 rounded-lg lg:py-4 lg:px-6"><Image src="/img/f.svg" alt="" width={20} height={20}/></a></Link>
          </div>
         
          <div className="w-full relative flex flex-row py-5 justify-center items-center">
              <div className="flex-grow border-t border-[#d9dfe4]"></div>
              <span className="flex-shrink mx-4 text-[#6C757D]">OR</span>
              <div className="flex-grow border-t border-[#d9dfe4]"></div>
          </div>

          <form action="">
            <div className="w-full grid gap-8">
              <div className="py-2 px-5 border-2 border-[#CED4DA] rounded hover:border-primary-color lg:py-3">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  className="bg-transparent outline outline-0 focus:outline-none sm:text-sm lg:placeholder:text-xl"

                />
              </div>
              <div className="flex justify-between py-2 px-5 border-2 border-[#CED4DA] rounded hover:border-primary-color lg:py-3">
                <input
                  type="text"
                  placeholder="Password"
                  name="password"
                  className="bg-transparent w-5/6 outline outline-0 focus:outline-none lg:placeholder:text-xl"
                />
                <span className="text-primary-color font-semibold">SHOW</span>
              </div>
              <div>
                <button className="text-center w-full bg-primary-color py-2 px-5 text-white rounded lg:py-3 lg:text-xl">Register</button>
              </div>

              <Link href="#">
                <a target="_blank" className="bg-trial-bg p-4 border-dotted border-2 border-[#25A1AF] rounded-lg">
                <h3 className="text-trial-text flex flex-col items-center ">
                  <div className="font-semibold">Click here</div> 
                  <div className="text-center font-light">
                      to sign up for the complete Examine Membership.
                      Includes a free 2 week trial!
        
                  </div> 
                </h3>
                </a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
