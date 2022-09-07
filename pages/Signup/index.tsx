import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const SignupForm = () => {
      const [isPasswordEncrypted, setPasswordEncripted] = useState<boolean>(true)

      const revealPassword = () => {
        setPasswordEncripted((prev:any) => !prev);
      }

  return (
    <>
      <Navbar />
      <div className="flex justify-center pt-[50px] pb-[100px] ">
        <div className="m-auto p-7 w-[90%] flex flex-col items-center rounded-3xl lg:shadow-[0_2px_5px_2px_rgba(0,0,0,0.08)] lg:px-[4%] lg:py-[5%] lg:w-[39%]">
          <h1 className="font-serif text-xl pb-2 lg:text-4xl lg:pb-3 font-laro font-semi-bold">
            Create your account
          </h1>
          <p className="text-sm leading-6 text-examine-gray lg:text-xl lg:pb-6 font-inter font-normal">
            It Includes a free 2 weeks trial!
          </p>
          <div className="flex flex-row gap-5 p-5 pb-2 lg:pb-1">
            <Link href="#">
              <a className="shadow py-2 h-30 w-30 px-3 pb-1 rounded-lg  lg:py-4 lg:px-6">
                <Image src="/img/search 1.svg" alt="" width={20} height={20} />
              </a>
            </Link>
            <Link href="#">
              <a className="shadow py-2 px-3 pb-1 rounded-lg lg:py-4 lg:px-6">
                <Image src="/img/path4.svg" alt="" width={20} height={20} />
              </a>
            </Link>
            <Link href="#">
              <a className="shadow py-2 px-3 pb-1 rounded-lg lg:py-4 lg:px-6">
                <Image src="/img/f.svg" alt="" width={20} height={20} />
              </a>
            </Link>
          </div>

          <div className="w-full relative flex flex-row py-5 justify-center items-center">
            <div className="flex-grow border-t border-[#d9dfe4]"></div>
            <span className="flex-shrink mx-4 text-[#6C757D] font-inter font-normal">
              OR
            </span>
            <div className="flex-grow border-t border-[#d9dfe4]"></div>
          </div>

          <form className="w-full" action="">
            <div className="w-full grid gap-6">
              <div className="py-1 px-5 border-2 border-[#CED4DA] rounded hover:border-primary-color lg:py-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="fullname"
                  className="bg-transparent w-full outline outline-0 focus:outline-none sm:text-sm lg:placeholder:text-xl"
                />
              </div>
              <div className="py-2 px-5 border-2 border-[#CED4DA] rounded hover:border-primary-color lg:py-2">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  className="bg-transparent w-full outline outline-0 focus:outline-none sm:text-sm lg:placeholder:text-xl"
                />
              </div>
              <div className="flex justify-between py-2 px-5 border-2 border-[#CED4DA] rounded hover:border-primary-color lg:py-2">
                <input
                  type={isPasswordEncrypted? "password": "text"}
                  placeholder="Password"
                  name="password"
                  className="bg-transparent w-5/6 outline outline-0 focus:outline-none lg:placeholder:text-xl"
                />
                <span onClick={revealPassword} className="text-primary-color font-inter font-semibold cursor-pointer">
                  SHOW
                </span>
              </div>
              <div>
                <button className="text-center w-full bg-[#5E3B76] py-2 px-5 text-white rounded lg:py-3 lg:text-xl font-light font-inter">
                  Start your 2-weeks free trial!
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignupForm;
