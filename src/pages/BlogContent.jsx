import blog from '../assets/blog-img.webp'
import profile from '../assets/profile-img.jpeg'
import Navbar from "../components/Navbar"


const BlogContent = () => {

   
    return (
      <div className='bg-black text-white min-h-screen'>
        <Navbar/>
        <div className='flex flex-col justify-center items-center py-16 px-4 mt-20'>
            <div className='w-full max-w-4xl flex flex-col gap-6 p-6 rounded-2xl'>
                <img src={blog} alt="blog-img" className='w-full md:w-full h-full md:h-80 object-contain rounded-2xl' />
                
                <div className='flex flex-col gap-4'>
                  <small className="text-gray-400 text-sm">July 19, 2025</small>
                  <h1 className='text-3xl md:text-5xl font-bold leading-tight'>The OpenCut Alpha is here!</h1>
                  
                  <div className='flex items-center gap-3'>
                      <img src={profile} alt="Author profile" className='w-10 h-10 rounded-full object-cover'/>
                      <div>
                        <p className="text-sm font-medium">Maze Winther</p>
                        <small className="text-gray-400 text-xs">Lead Developer</small>
                      </div>
                  </div>
                </div>

                <div className='border-t border-gray-800 pt-8'>
                    <div className='prose prose-invert max-w-none space-y-6'>
                        <p className='text-lg text-gray-300 leading-relaxed'>
                            The moment we've all been waiting for - you can finally try <span className='font-bold text-white'>OpenCut</span>!
                        </p>
                        
                        <div className=' p-4 rounded-lg '>
                            <p className='text-white font-semibold mb-2'>Try it now:</p>
                            <a 
                                href="https://opencut.app/" 
                                className=' transition-colors underline font-medium'
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                https://opencut.app/
                            </a>
                        </div>

                        <div className='p-4 rounded-lg'>
                            <p className='text-gray-200'>
                                <span className='font-bold'>Remember:</span> This is super early alpha. Expect bugs, missing features, and rough edges. We're literally one month in.
                            </p>
                        </div>

                        <div className='space-y-4'>
                            <h3 className='text-xl font-bold text-white'>What works right now:</h3>
                            <ul className='space-y-2 text-gray-300'>
                                <li className='flex items-start gap-2'>
                                    <span className=' mt-1'>•</span>
                                    Import videos,
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className=' mt-1'>•</span>
                                    Basic timeline editing,
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className=' mt-1'>•</span>
                                    Simple cuts and trims,
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className=' mt-1'>•</span>
                                    Zero watermarks, completely free.
                                </li>
                            </ul>
                        </div>

                        <div className='space-y-4'>
                            <h3 className='text-xl font-bold text-white'>What's coming soon:</h3>
                            <ul className='space-y-2 text-gray-300'>
                                <li className='flex items-start gap-2'>
                                    <span className=' mt-1'>•</span>
                                    Proper rendering/export,
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className=' mt-1'>•</span>
                                    Effects and transitions,
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className=' mt-1'>•</span>
                                    Audio editing,
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className=' mt-1'>•</span>
                                    Better export options,
                                </li>
                                <li className='flex items-start gap-2'>
                                    <span className=' mt-1'>•</span>
                                    Basically everything CapCut has, and more.
                                </li>
                            </ul>
                        </div>

                        <div className=' p-6 rounded-lg'>
                            <p className='text-purple-100 leading-relaxed'>
                                Found a <span className='italic font-medium'>bug</span>? Have <span className='italic font-medium'>feedback</span>? Drop it in the suggestions channel on our{' '}
                                <a href='https://discord.com/' target='_blank' className='font-bold text-blue-500'>Discord</a>! Your input is helping build the future of open source video editing.
                            </p>
                            {/* <div className='mt-4 flex gap-3'>
                                <a 
                                    href="https://discord.gg/opencut" 
                                    className='bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors font-medium'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Join Discord
                                </a>
                                <a 
                                    href="https://github.com/opencut" 
                                    className='bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors font-medium'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View on GitHub
                                </a>
                            </div>
                      
                        <div className='text-center pt-8 border-t border-gray-800'>
                            <p className='text-gray-400 text-sm'>
                                Thank you for being part of the OpenCut journey! 🎬
                            </p>
                        </div> */}
                          </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}

export default BlogContent