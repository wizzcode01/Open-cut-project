import Navbar from "./Navbar";
import landingImg from '../assets/landing-page .webp';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { SiVercel } from 'react-icons/si';
import { motion } from "framer-motion";
import { useRef } from "react"
import {  useMotionValue, useTransform } from "framer-motion"
 
const Hero = () => {

 const containerRef = useRef(null)
 //motion values for both handles
 const leftX = useMotionValue(0)
 const rightX = useMotionValue(0)

 const maskLeft = useTransform(leftX, [0, 150], ["0%", "100%"])
  const maskRight = useTransform(rightX, [0, 150], ["0%", "100%"])
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

            
          <motion.div
            ref={containerRef}
            className="relative  border border-yellow-500 rounded-2xl bg-black/80 px-8 lg:px-8 lg:h-18 -rotate-3 h-15 flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
      {/* Text with dynamic mask */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-gray-100 text-center"
        // style={{
        //   WebkitMaskImage: `linear-gradient(to bottom, rgba(0,0,0,1) ${maskLeft.get()}, rgba(0,0,0,0) ${maskRight.get()})`,
        //   WebkitMaskRepeat: "no-repeat",
        //   WebkitMaskSize: "100% 100%",
        // }}
      >
        Video Editor
      </motion.h1>

      {/* Left handle */}
      <motion.div
        drag="x"
        dragConstraints={containerRef}
        style={{ x: leftX }}
        className="absolute -left-4 top-0 border border-yellow-500 rounded-full lg:w-7 lg:h-18 w-7 h-15 cursor-pointer bg-black"
      >
        <div className="lg:h-11 h-8 bg-yellow-500 w-3 mt-3 rounded-full ml-[7px]"></div>
      </motion.div>

      {/* Right handle */}
      <motion.div
        drag="x"
        dragConstraints={containerRef}
        style={{ x: rightX }}
        className="absolute -right-3 top-0 border border-yellow-500 rounded-full lg:w-7 lg:h-18 w-7 h-15 cursor-pointer bg-black"
      >
        <div className="lg:h-11 h-8 bg-yellow-500 w-3 mt-3 rounded-full ml-[7px]"></div>
      </motion.div>
    </motion.div>
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
