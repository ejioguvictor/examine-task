import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className="md:flex sm:hidden none:hidden  shadow-[0_0px_4px_0px_rgba(0,0,0,0.18)]">
        <div className="text-left font-bold basis-1/4 items-center my-auto pl-8">
          <span className="text-primary-color text-2xl">Examine</span>
        </div>
        <div className="flex flex-row gap-x-4 text-[#5E3B76] underline decoration-primary-color-400/30 text-base basis-1/2 py-6 px-3 bg-[#F6F6F6]">
          <Image src="/img/searchIcon.svg" alt="" width={20} height={20} />
          <div className="w-1/2 border-[0_0_1px_0] border-[#C9BDD2]">
            <input
              type="text"
              placeholder="What do you want to learn about?"
              className="bg-transparent w-full outline-none placeholder:text-[#5E3B76] placeholder:text-thin placeholder:opacity-70"
            />
          </div>
        </div>
        <div className="flex basis-1/4 gap-8 justify-center">
          <button className="font-normal font-inter">Login</button>
          <button className="bg-[#FFD747] rounded-2xl w-[100px] p-1 my-auto font-bold font-inter">
            Sign up
          </button>
          <Image src="/img/nav-icon.svg" alt="" width={20} height={20} />
        </div>
      </div>

      <div className="flex flex-row justify-between bg-primary-color p-4 lg:hidden md:hidden">
        <div className="flex flex-row gap-2 items-center">
          <div className="flex items-center">
            <Image src="/img/mobileNavIcon.svg" alt="" width={30} height={30} />
          </div>
          <h2 className="text-white text-2xl">Examine</h2>
        </div>
        <div className="flex items-center gap-2">
          <input type="text" className="bg-transparent outline-0 text-white" />
          <Image src="/img/icon.svg" alt="" width={20} height={20} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
