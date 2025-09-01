import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className=' h-16 p-2 flex flex-row bg-gray-100'>
      <div className='flex mr-auto'>
          <div className='h-12 w-12 p-3 mx-1 justify-center align-middle' >
            <RxHamburgerMenu className='h-6 w-6'/>
          </div>
          <div className='flex justify-center'>
            <Image src={"/newgmaillogo.webp"}  width={109} height={40} alt='gmail_image' ></Image>
          </div>
        </div>
        <div className='relative flex w-230 h-12 items-center'>
            <div className="absolute left-3 flex justify-center items-center h-12 w-12 p-1.5">
              <IoIosSearch className="text-gray-400 h-6 w-6" />
            </div>
            <div className='flex items-center min-w-full pl-2.5 pr-7.5'>
            <input type="text" placeholder='Search mail' className='border-1 rounded-full pl-12 w-2/3 h-12 bg-gray-200'/>
            </div>
        </div>
        <div className='flex ml-auto'>
          <div className='flex h-11 w-11 justify-center items-center m-0.5 p-2'>
          <MdOutlineContactSupport className='h-6 w-6'/>
          </div> 
          <div  className='flex h-11 w-11 justify-center items-center m-0.5 p-2'>
          <IoSettingsOutline className='h-6 w-6'/>
          </div>
          <div className='flex h-11 w-11 justify-center items-center m-0.5 p-2'>
          <Image src={"/Google-gemini-icon.svg.png"} height={24} width={24} alt='gemini_image'></Image>
          </div>
          <div className='flex h-11 w-11 justify-center items-center m-0.5 p-2'>
          <Image src={"/google_apps_icon.png"} height={24} width={24} alt='9 icons google' ></Image>
          </div>
        </div>
    </div>
  )
}

export default Navbar