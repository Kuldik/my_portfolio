import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-around m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="./profile-image.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin rounded-full pr-1 min-h-[70px] min-w-[70px] max-h-[70px] max-w-[70px] object-cover"
          />

          <span className="font-bold ml-[10px] hidden md:block text-center text-gray-300">
            Tim Klimenko
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-around">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="md:block hidden">
          <a href="mailto:your-email@example.com" className="text-white button-primary p-2 rounded-xl">Contact me</a>
          <a href="https://codepen.io/Klimenko-Tim/pens/public" className="ml-[10px] text-white button-primary p-2 rounded-xl">Codepen</a>
          <a href="https://github.com/Kuldik" className="ml-[10px] text-white button-primary p-2 rounded-xl">Github</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
