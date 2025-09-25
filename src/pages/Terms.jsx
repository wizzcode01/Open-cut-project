import React from 'react';
import { FaGithub } from "react-icons/fa"
import { SiVercel, SiDatadog } from "react-icons/si"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const TermsOfService = () => {
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
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-100">Terms of Service</h1>
                    <p className="text-xl md:text-[22px] text-gray-200 max-w-2xl">
                      Fair and transparent terms for our free, open-source video editor.</p>
                </div> 
          </div>
            <div className='flex flex-col justify-center md:m-14'>
          <div className='md:w-4xl w-full flex flex-col justify-center  text-gray-100 border rounded-lg border-[#222121] shadow p-7 m-auto '>
          
              <div className="mb-12">
                <h2 className="text-2xl font-bold  mb-6">
                  Welcome to OpenCut
                </h2>
                <div className="rounded-lg p-6 mb-6">
                  <p className="text-gray-100 mb-4">
                    OpenCut is a free, open-source video editor that runs in your browser. By using our service, you agree to these terms. We've designed these terms to be fair and protect both you and our project.
                  </p>
                  <p className=" leading-relaxed">
                    <strong className="text-gray-100">Key principle:</strong> Your content stays on your device. We never claim ownership of your videos or projects.
                  </p>
                </div>
              </div>

              {/* Your Content, Your Rights Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">
                  Your Content, Your Rights
                </h2>
                <p className=" mb-4">
                  <strong className="">You own everything you create.</strong> OpenCut processes your videos locally on your device, so we never have access to your content. We make no claims to ownership, licensing, or rights over your videos, projects, or any content you create using OpenCut.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">&#8226; Your videos remain completely private and under your control</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">&#8226; You retain all intellectual property rights to your content</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">&#8226; You can export and use your content however you choose</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">&#8226; No watermarks, no licensing restrictions from OpenCut</span>
                  </li>
                </ul>
              </div>

              {/* How You Can Use OpenCut Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">
                  How You Can Use OpenCut
                </h2>
                <p className=" mb-4">
                  OpenCut is free for personal and commercial use. You can:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">&#8226; Create videos for personal, educational, or commercial purposes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">&#8226; Use OpenCut for client work and paid projects</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">&#8226; Share and distribute videos created with OpenCut</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">&#8226; Modify and distribute the OpenCut software (under MIT license)</span>
                  </li>
                </ul>
                <p className="">
                  <strong>What we ask:</strong> Don't use OpenCut for illegal activities, harassment, or creating harmful content. Be respectful of others and follow applicable laws.
                </p>
              </div>

              {/* Account and Service Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">
                  Account and Service
                </h2>
                <p className=" mb-4">
                  To use certain features, you may create an account:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">&#8226; Provide accurate information when signing up</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">&#8226; Keep your account secure and don't share credentials</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">&#8226; You're responsible for activity under your account</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">&#8226; You can delete your account at any time</span>
                  </li>
                </ul>
                <p className="">
                  OpenCut is provided "as is" without warranties. While we strive for reliability, we can't guarantee uninterrupted service.
                </p>
              </div>

              {/* Open Source Benefits Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold  mb-6">
                  Open Source Benefits
                </h2>
                <p className=" mb-4">
                  Because OpenCut is open source, you have additional rights:
                </p>
                <div className="">
                  <ul>
                    <li><span className='font-semibold'>&#8226; Review our code</span> to see exactly how we handle your data</li>
                    <li><span className='font-semibold'>&#8226; Self-host OpenCut</span> on your own servers</li>
                    <li><span className='font-semibold'>&#8226; Modify the software</span> to suit your needs</li>
                    <li><span className='font-semibold'>&#8226; Contribute improvements</span> back to the community</li>
                  </ul>
                </div>
                <p className=" mt-4">
                  View our source code and license on GitHub.
                </p>
              </div>

              {/* Third-Party Content Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold  mb-6">
                  Third-Party Content
                </h2>
                <p className=" mb-4">
                  When using OpenCut, make sure you have the right to use any content you import:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">&#8226; Only upload content you own or have permission to use</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">&#8226; Respect copyright, trademarks, and other intellectual property</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">&#8226; Don't use copyrighted music, images, or videos without permission</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">&#8226; You're responsible for any claims related to your content</span>
                  </li>
                </ul>
              </div>

              {/* Limitations and Liability Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold  mb-6">
                  Limitations and Liability
                </h2>
                <p className=" mb-4">
                  OpenCut is provided free of charge. To the extent permitted by law:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">&#8226; We're not liable for any loss of data or content</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">&#8226; Projects are stored in your browser and may be lost if you clear browser data</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">&#8226; We're not responsible for how you use the service</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">&#8226; Our liability is limited to the maximum extent allowed by law</span>
                  </li>
                </ul>
                <p className="">
                  Since your content stays on your device, we have no way to recover lost projects. Consider exporting important videos when finished editing.
                </p>
              </div>

              {/* Service Changes Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold  mb-6">
                  Service Changes
                </h2>
                <p className=" mb-4">
                  We may update OpenCut and these terms:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">&#8226; We'll notify you of significant changes to these terms</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">&#8226; Continued use means you accept any updates</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">&#8226; You can always self-host an older version if you prefer</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">&#8226; Major changes will be discussed with the community on GitHub</span>
                  </li>
                </ul>
              </div>

              {/* Termination Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold  mb-6">
                  Termination
                </h2>
                <p className=" mb-4">
                  You can stop using OpenCut at any time:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">&#8226; Delete your account through your profile settings</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">&#8226; Clear your browser data to remove local projects</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">&#8226; Your content remains yours even if you stop using OpenCut</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="">&#8226; We may suspend accounts for violations of these terms</span>
                  </li>
                </ul>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">
                  Contact and Disputes
                </h2>
                 <p className=" mb-6">
                  Questions about these terms or need to report an issue?
                </p>
                <p>Contact us through our <span >GitHub repository</span>, email us at <span>oss@opencut.app</span>, or reach out on <span>X (Twitter)</span>.</p>
                <p className="mt-4">These terms are governed by applicable law in your jurisdiction. We prefer to resolve disputes through friendly discussion in our open-source community.</p>
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

export default TermsOfService