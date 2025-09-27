import { FaGithub } from "react-icons/fa"
import { SiVercel, SiDatadog } from "react-icons/si"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Roadmap = () => {

    return (
         <div className="bg-black text-white min-h-screen">
            <Navbar/>
            <div className="flex flex-col gap-12 justify-center items-center py-20 px-4 mt-20">
                {/* Header Section */}
                <div className="flex flex-col gap-6 text-center max-w-4xl">
                    <div className="flex justify-center">
                        <span className="rounded-2xl px-3 flex gap-2 items-center text-[13px] font-bold text-white bg-[#2e2c2c]">
                            <FaGithub className="text-gray-200"/>
                            Open Source
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-100">Roadmap</h1>
                    <p className="text-xl md:text-xl text-[#d4d4d4] max-w-3xl">
                       What's coming next for OpenCut (last updated: July 14, 2025) </p>
                </div> 

                <div className="w-full flex flex-col gap-5 justify-center m-auto items-start text-[#a3a3a3] lg:w-3xl ">
                    <ol className="flex flex-col gap-3">
                        <div className="flex gap-2 items-center rounded-lg">
                        <li className="font-semibold text-[20px] text-[#dddddd]">1.  Start</li> 
                        <button className="bg-green-500 text-white rounded-2xl px-2 text-[14px] font-semibold">Completed</button>
                        </div>
                        <div className="">
                            <p className="text-[16px] md:text-[17px]  max-w-3xl ml-5">  This is where it all started. Repository created, initial project structure, and the vision for a free, open-source video editor. Check out the first tweet to see where it started.</p>
                        </div>
                    </ol>
                      <ol  className="flex flex-col gap-3">
                        <div className="flex gap-2 items-center rounded-lg">
                        <li className="font-semibold text-[20px] text-[#dddddd]">2.  Core UI</li> 
                         <button className="bg-green-500 text-white rounded-2xl px-2 text-[14px] font-semibold">Completed</button>
                        </div>
                       
                        <div>
                            <p className="text-[16px] md:text-[17px]  max-w-3xl  ml-5">Built the foundation - main layout, header, sidebar, timeline container, and basic component structure. Not all functionality yet, but the UI framework that everything else builds on.</p>
                        </div>
                    </ol>
                      <ol  className="flex flex-col gap-3">
                        <div className="flex gap-2 items-center rounded-lg">
                          <li className="font-semibold text-[20px] text-[#dddddd]">3  Basic Functionality</li> 
                           <button className="bg-yellow-500 text-white rounded-2xl px-2 text-[14px] font-semibold">In Progress</button>
                        </div>
                       
                        <div>
                            <p className="text-[16px] md:text-[17px]  max-w-3xl  ml-5">The heart of any video editor. Timeline zoom in/out, making clips longer/shorter, dragging elements around, selection, playhead scrubbing. This part has to be fucking perfect because it's what users interact with 99% of the time.</p>
                        </div>
                    </ol>
                      <ol  className="flex flex-col gap-3">
                        <div className="flex gap-2 items-center rounded-lg">
                          <li className="font-semibold text-[20px] text-[#dddddd]">4  Export/Preview Logic</li>
                            <button className="bg-green-500 text-white rounded-2xl px-2 text-[14px] font-semibold">Completed</button> 
                         </div>
                      
                        <div>
                            <p className="text-[16px] md:text-[17px]  max-w-3xl  ml-5">The foundation that enables everything else. Real-time preview, video rendering, export functionality. Once this works, we can add effects, filters, transitions - basically everything that makes a video editor powerful.</p>
                        </div>
                    </ol>
                      <ol  className="flex flex-col gap-3">
                        <div className="flex gap-2 items-center rounded-lg">
                          <li className="font-semibold text-[20px] text-[#dddddd]">5  Text</li> 
                           <button className="bg-[#302f2f] text-white rounded-2xl px-2 text-[14px] font-semibold">Not Started</button>
                        </div>
                       
                        <div>
                            <p className="text-[16px] md:text-[17px]  max-w-3xl  ml-5">After media, text is the next most important thing. Font selection with custom font imports, text stroke, colors. All the text essential text properties.</p>
                        </div>
                    </ol>
                      <ol  className="flex flex-col gap-3">
                        <div className="flex gap-2 items-center rounded-lg">
                          <li className="font-semibold text-[20px] text-[#dddddd]">6  Effects</li> 
                            <button className="bg-[#302f2f] text-white rounded-2xl px-2 text-[14px] font-semibold">Not Started</button>
                        </div>
                      
                        <div>
                            <p className="text-[16px] md:text-[17px]  max-w-3xl  ml-5">Adding visual effects to both text and media. Blur, brightness, contrast, saturation, filters, and all the creative tools that make videos pop. This is where the magic happens.</p>
                        </div>
                    </ol>
                      <ol  className="flex flex-col gap-3">
                        <div className="flex gap-2 items-center rounded-lg">
                          <li className="font-semibold text-[20px] text-[#dddddd]">7  Transition</li> 
                           <button className=" bg-[#302f2f] text-white rounded-2xl px-2 text-[14px] font-semibold">Not Started</button>
                        </div>
                       
                        <div>
                            <p className="text-[16px] md:text-[17px]  max-w-3xl  ml-5">Smooth transitions between clips. Fade in/out, slide, zoom, dissolve, and custom transition effects.</p>
                        </div>
                    </ol>
                      <ol  className="flex flex-col gap-3">
                        <div className="flex gap-2 items-center rounded-lg">
                          <li className="font-semibold text-[20px] text-[#dddddd]">8  Refine from Here</li> 
                           <button className="bg-blue-500 text-white rounded-2xl px-2 text-[14px] font-semibold">Future</button>
                        </div>
                       
                        <div>
                            <p className="text-[16px] md:text-[17px]  max-w-3xl  ml-5">Once we nail the above, we have a solid foundation to build anything. Advanced features, performance optimizations, mobile support, desktop app.</p>
                        </div>
                    </ol>
                  
                </div>
                <div className=" border-t border- border-[#222121] ">
                  <div className="flex flex-col justify-between items-center gap-6 lg:w-3xl w-full mt-14">
                           <h1 className="text-center font-bold text-xl text-[#e4e2e2]">Want to Help?</h1>
                        <div>
                            <p className="text-center text-[#888888] text-[17px]">OpenCut is open source and built by the community. Every contribution, no matter how small, helps us build the best free video editor possible.</p>
                        </div>
                          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a 
                                href="https://github.com/OpenCut-app/OpenCut/blob/main/.github/CONTRIBUTING.md" 
                                className="border-gray-900 border text-white px-6 py-2 rounded-2xl font-semibold hover:bg-gray-700 transition-colors flex gap-2 items-center"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub/>
                                Start Contributing
                            </a>
                            <a 
                                href="https://github.com/OpenCut-app/OpenCut/issues" 
                                className="border border-gray-900 text-white px-6 py-2 rounded-2xl font-semibold hover:bg-gray-800 transition-colors text-center"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                Browse Issues
                           </a>
                       </div>
                    </div>
                </div> 
              
            </div>   
            <Footer/>
        </div>     
    )
}

export default Roadmap