import Navbar from "./Navbar";
import landingImg from '../assets/landing-page .webp';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { SiVercel } from 'react-icons/si';
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${landingImg})` }}
    >
      <Navbar />
      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center h-full text-center px-4 mt-10">
        <div className="flex flex-col items-center gap-4">

          <motion.p
            className="flex items-center gap-2 text-sm mb-2 border border-gray-800 p-2 px-4 rounded-3xl text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            Sponsored by{" "}
            <span className="font-bold flex items-center gap-2">
              <SiVercel className="text-gray-100" /> Vercel
            </span>
            
          </motion.p>

          <div className="flex flex-col items-center text-gray-200">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The Open Source
            </motion.h1>

            <motion.h1
              className="relative z-20 text-4xl md:text-6xl font-bold mb-4 border-t border-b border-yellow-500 -rotate-4 p-1 px-8 rounded-lg bg-black/80 "
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
            <div className="flex justify-between">
                <div className="absolute -left-2 top-0 border border-yellow-500 rounded-full w-8 h-17 ">
                  <div className="h-10 bg-yellow-500 w-2 mt-3 rounded-full ml-2.5"></div>
                </div>

                <div className="absolute -right-2 top-0 border border-yellow-500 rounded-full w-8 h-17 ">
                  <div className="h-10 bg-yellow-500 w-2 mt-3 rounded-full ml-2.5"></div>
                </div>
              
            </div>  

              Video Editor
            </motion.h1>
          </div>

          <motion.p
            className="text-lg md:text-xl max-w-xl mb-6 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            A simple but powerful video editor that gets the job done. Works on any platform.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <Link
              to="#"
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition flex gap-4 items-center"
            >
              Try early beta <FaArrowRight size={16} className="inline text-gray-800" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
