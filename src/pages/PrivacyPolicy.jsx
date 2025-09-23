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
          <div className='w-3xl flex flex-col justify-center m-auto text-gray-100'>
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
                    <span className="">Email address (for account access)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">Profile information from Google OAuth (if you choose to sign in with Google)</span>
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
                    <span className="">Save your projects locally on your device</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">Remember your editor preferences and settings</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">Keep you logged in across browser sessions</span>
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
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold  mb-2">Google OAuth:</h3>
                    <p className=" text-sm">For optional Google sign-in (governed by Google's privacy policy)</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold  mb-2">Vercel:</h3>
                    <p className=" text-sm">For hosting and content delivery</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-semibold  mb-2">Databuddy:</h3>
                    <p className=" text-sm">For anonymized analytics</p>
                  </div>
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
                    <span className="">Delete your account and all associated data at any time</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">Export your project data</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">Clear local storage to remove all saved projects</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">Contact us with any privacy concerns</span>
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
                <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-200 transition-colors cursor-pointer">
                  <svg className="w-4 h-4 " fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
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
                <div className="flex flex-wrap gap-4">
                  <div className="inline-flex items-center gap-2 rounded-lg px-4 py-2 hover:bg-blue-100 transition-colors cursor-pointer">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-blue-700 font-medium">GitHub Issues</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg px-4 py-2 hover:bg-green-100 transition-colors cursor-pointer">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className=" font-medium">oss@opencut.app</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 rounded-lg px-4 py-2 hover:bg-sky-100 transition-colors cursor-pointer">
                    <svg className="w-4 h-4 text-sky-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    <span className="text-sky-700 font-medium">X (Twitter)</span>
                  </div>
                </div>
              </div>

              {/* Last Updated */}
              <div className="text-center pt-8 border-t border-gray-200">
                <p className=" text-sm">
                  Last updated: July 14, 2025
                </p>
              </div>
            </div>
          <Footer/> 
        </div>
   
  );
}

export default PrivacyPolicy