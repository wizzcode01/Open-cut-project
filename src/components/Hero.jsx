import Navbar from "./Navbar";
import landingImg from '../assets/landing-page .webp';
import { FaArrowLeft, FaArrowRight,  } from 'react-icons/fa'
import { Link } from "react-router-dom";
import { SiVercel } from 'react-icons/si'

const Hero = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${landingImg})` }}
    >
      <Navbar />

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center h-full text-center px-4 mt-10 ">
       <div className="flex flex-col items-center gap-4">
        <p className=" flex items-center gap-2 text-sm mb-2 border border-gray-800 p-2 px-4 rounded-3xl text-gray-400">Sponsored by <span className="font-bold flex items-center gap-2"><SiVercel className="text-gray-100"/> Vercel</span></p>
        <div className="flex flex-col items-center text-gray-200">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            The Open Source
            </h1>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 border-2 border-y-amber-500 -rotate-4 p-1 rounded-lg"> 
                Video Editor</h1>
        </div>        
        <p className="text-lg md:text-xl max-w-xl mb-6 text-gray-400">
          A simple but powerful video editor that gets the job done. Works on any platform.
        </p>
        <Link
          href="#"
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition flex gap-4 items-center"
        >
          Try early beta <FaArrowRight size={16} className='inline text-gray-800 '/>
        </Link>
      </div>
         <style jsx>{`
                @keyframes slideInFromTop {
                    0% {
                        transform: translateY(-100px);
                        opacity: 0;
                    }
                    100% {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }

                @keyframes slideInFromLeft {
                    0% {
                        transform: translateX(-100px);
                        opacity: 0;
                    }
                    100% {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }

                @keyframes slideInFromRight {
                    0% {
                        transform: translateX(100px);
                        opacity: 0;
                    }
                    100% {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }

                @keyframes slideInFromBottom {
                    0% {
                        transform: translateY(100px);
                        opacity: 0;
                    }
                    100% {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    
    </div>
  );
};

export default Hero;
