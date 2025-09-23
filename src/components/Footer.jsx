import logo from "../assets/logo.svg"
import {  FaDiscord, FaXTwitter, FaGithub }  from 'react-icons/fa6'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="bg-[#000000] w-full border-t border-gray-800 py-4">
       <div className="flex flex-col md:flex-row justify-center items-start gap-5 p-10 max-w-6xl ">
          <div className="flex flex-col text-left text-white gap-4 md:w-1/2">
              <div className="flex gap-2 items-center">
                   <img src={logo} alt="logo" />
                    <h1 className="text-white font-semibold text-xl">OpenCut</h1>
                </div>
                <p className="text-gray-400 w-[80%] text-[15px]">The open source video editor that gets the job done. 
                    Simple, powerful, and works on any platform.
                </p>
                <div className="flex gap-4 text-[20px]">
                   <FaGithub className="text-gray-400 hover:text-white cursor-pointer transition-colors"/>
                   <FaXTwitter className="text-gray-400 hover:text-white cursor-pointer transition-colors"/>
                   <FaDiscord className="text-gray-400 hover:text-[#5865F2] cursor-pointer transition-colors"/>
                </div>
                    <p className="text-gray-400 mt-10 text-[14px]">© 2025 OpenCut, All Rights Reserved</p>
          </div>
          
          <div className="flex flex-col">
            <h1 className="text-white font-bold mb-4">Resources</h1>
            <div className="flex flex-col gap-3 text-gray-400">
                <Link to="/roadmap" className="hover:text-white transition-colors">Roadmap</Link>
                <Link to="/privacy" className="hover:text-white transition-colors">Privacy policy</Link>
                <Link href="/" className="hover:text-white transition-colors">Terms of use</Link>
            </div>
          </div>
          
           <div className="flex flex-col">
            <h1 className="text-white font-bold mb-4">Company</h1>
            <div className="flex flex-col gap-3 text-gray-400">
                <Link to="/contributors" className="hover:text-white transition-colors">Contributors</Link>
                <Link href="/" className="hover:text-white transition-colors">About</Link>
            </div>
          </div>
       </div>
    
       
    </div>
  )
}

export default Footer