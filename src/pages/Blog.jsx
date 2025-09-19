import blog from '../assets/blog-img.webp'
import profile from '../assets/profile-img.jpeg'
import Navbar from "../components/Navbar";

const Blog = () => {
    return (
       <div className='bg-black text-white min-h-screen'>
        <Navbar/>
        <div className='flex flex-col justify-center items-center py-16'>
          <div className='max-w-5xl w-full px-4'>
            <div className='text-center flex flex-col justify-center items-center gap-4 mb-16'>
              <h1 className='font-bold text-5xl text-gray-300'>Blog</h1>
              <p className='text-[22px] text-gray-400 max-w-2xl'>
                Read the latest news and updates about OpenCut, the free and open-source video editor
              </p>
            </div>
            
            <div className='w-full md:w-[35%] md:h-[60%] flex flex-col gap-4 p-3 bg-gray-900 rounded-2xl cursor-pointer md:mx-auto'>
              <img src={blog} alt="blog-img" className='w-full h-full rounded-lg object-cover' />
              <div className='flex items-center gap-2'>
                  <img src={profile} alt="profile" className='w-8 h-8 rounded-full object-cover'/>
                  <small>Maze Winther</small>
              </div>
              <div className='flex flex-col gap-2'>
                <h1 className='text-lg font-semibold'>The OpenCut Alpha is here!</h1>
                <p className='text-sm text-gray-400'>The moment we've all been waiting for - you can finally try OpenCut!</p>
              </div>
           </div>
          </div>
        </div>
       </div>
    )
}

export default Blog