import React from 'react';
import { FaGithub } from "react-icons/fa"
import { SiVercel, SiDatadog } from "react-icons/si"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


const PrivacyPolicy = () => {
  return (
        <div className="bg-black text-white min-h-screen">
            <Navbar/>
            <div className="flex flex-col gap-12 justify-center items-center py-20 px-4 mt-20">
                <div className="flex flex-col gap-6 text-center max-w-4xl">
                    <div className="flex justify-center">
                        <span className="rounded-xl px-3 flex gap-2 items-center text-[13px] font-bold text-white bg-[#2e2c2c]">
                            <FaGithub className="text-gray-200"/>
                            Open Source
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-100">Privacy Policy</h1>
                    <p className="text-xl md:text-[22px] text-gray-400 max-w-2xl">
                      Learn how we handle your data and privacy. Contact us if you have any questions.</p>
                </div> 
          </div>
            <div className='flex flex-col justify-center m-14'>
          <div className='w-4xl flex flex-col justify-center  text-gray-100 border rounded-lg border-[#222121] shadow p-7 m-auto '>
          
              <div className="mb-12">
                <h2 className="text-2xl font-bold  mb-6">
                  Your Videos Stay Private
                </h2>
                <div className="rounded-lg p-6 mb-6">
                  <p className="text-gray-100 font-semibold mb-4">
                    <strong className="text-gray-100 ">OpenCut processes all videos locally on your device.</strong> We never upload, store, or have access to your video files. Your content remains completely private and under your control at all times.
                  </p>
                  <p className=" leading-relaxed">
                    All video editing, rendering, and processing happens in your browser using WebAssembly and local storage. No video data is transmitted to our servers.
                  </p>
                </div>
              </div>

              {/* Account Information Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">
                  Account Information
                </h2>
                <p className=" mb-4">
                  When you create an account, we only collect:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">&#8226; Email address (for account access)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">&#8226; Profile information from Google OAuth (if you choose to sign in with Google)</span>
                  </li>
                </ul>
                <div className=" rounded-lg p-4 mb-4">
                  <p className="">
                    <strong className="">We do NOT store your projects on our servers.</strong> All project data, including names, thumbnails, and creation dates, is stored locally in your browser using IndexedDB.
                  </p>
                </div>
                <p className="">
                  We use Better Auth for secure authentication and follow industry-standard security practices.
                </p>
              </div>

              {/* Analytics Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">
                  Analytics
                </h2>
                <p className=" mb-4">
                  We use Databuddy for completely anonymized and non-invasive analytics to understand how people use OpenCut.
                </p>
                <p className="">
                  This helps us improve the editor, but we never collect personal information, track individual users, or store any data that could identify you.
                </p>
              </div>

              {/* Local Storage & Cookies Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">
                  Local Storage & Cookies
                </h2>
                <p className=" mb-4">
                  We use browser local storage and IndexedDB to:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">&#8226; Save your projects locally on your device</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">&#8226; Remember your editor preferences and settings</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">&#8226; Keep you logged in across browser sessions</span>
                  </li>
                </ul>
                <p className="">
                  All data stays on your device and can be cleared at any time through your browser settings.
                </p>
              </div>

              {/* Third-Party Services Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold  mb-6">
                  Third-Party Services
                </h2>
                <p className=" mb-4">
                  OpenCut integrates with these services:
                </p>
                <div className="">
                  <ul>
                    <li><span className='font-semibold'>&#8226; Google OAuth:</span> For optional Google sign-in (governed by Google's privacy policy)</li>
                    <li><span className='font-semibold'>&#8226; Vercel:</span>For hosting and content delivery</li>
                    <li> <span className='font-semibold'>&#8226; Databuddy:</span>For anonymized analytics</li>
  
                  </ul>
              
                </div>
              </div>

              {/* Your Rights Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold  mb-6">
                  Your Rights
                </h2>
                <p className=" mb-4">
                  You have complete control over your data:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">&#8226; Delete your account and all associated data at any time</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">&#8226; Export your project data</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">&#8226; Clear local storage to remove all saved projects</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">&#8226; Contact us with any privacy concerns</span>
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold  mb-6">
                  Open Source Transparency
                </h2>
                <p className=" mb-4">
                  OpenCut is completely open source. You can review our code, see exactly how we handle data, and even self-host the application if you prefer.
                </p>
                <div className="inline-flex items-center gap-2rounded-lg px-4 py-2 cursor-pointer">
                  <span className=" font-medium">View our source code on GitHub</span>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">
                  Contact Us
                </h2>
                 <p className=" mb-6">
                  Questions about this privacy policy or how we handle your data?
                </p>
                  <p>Open an issue on our <span >GitHub repository</span>, email us at <span>oss@opencut.app</span>, or reach out on <span>X (Twitter)</span>.</p>

              </div>

              {/* Last Updated */}
              <div className="text-start pt-8 border-t border-[#222121] m-2">
                <p className=" text-sm">
                  Last updated: July 14, 2025
                </p>
              </div>
            </div>
       
          </div>
             <Footer/> 
        </div>
   
  );
}

export default PrivacyPolicy