import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.svg'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Navbar = () => {

  return (
    <div className='flex justify-center items-center'>
    <nav className="bg-black text-white fixed top-0 md:w-3xl w-[95%] border border-gray-700 m-5 rounded-2xl h-15 ">
      <div className="max-w-6xl mx-auto px-4 ">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8  flex items-center justify-center font-bold">
              <img src={Logo} alt="logo-img"/>
            </div>
            <span className="text-xl font-bold md:block hidden">OpenCut</span>
          </Link>

          <div className="flex justify-between items-center gap-2 md:space-x-8">
            <div className='flex items-center gap-2 md:gap-4 text-[16px] font-semibold'>
                <Link to='/blog' className=' text-gray-200 hover:text-gray-400'>Blog</Link>
                <Link to='/contributors' className=' text-gray-200 hover:text-gray-400'>Contributors</Link>
            </div>
                <button className="bg-gray-200 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-300 cursor-pointer transition-colors font-semibold flex gap-2 items-center">
                Projects <FaArrowRight size={14} className='text-gray-700'/>
                </button>
          </div>

      </div>
      </div>
    </nav>
    </div>
  )

}

export default Navbar