import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Community</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">Github</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxDiscordLogo />
                        <a href="https://discord.gg/9vXuqJvY" className="text-[15px] ml-[6px]">Discord</a>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                      
                        <a href="https://github.com/Kuldik" className="text-[15px] ml-[6px]">Learning about me</a>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                        <a href="mailto:tim.klimenkoo@gmail.com" className="text-[15px] ml-[6px]">tim.klimenkoo@gmail.com</a>    
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer