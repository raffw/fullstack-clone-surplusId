import React from 'react'
import user from "../../../assets/user.svg"
import { CgProfile } from "react-icons/cg";
import { MdNavigateNext } from "react-icons/md";

const Profile = () => {
    const nama = [
        {
            name: "Arif Rafly Wicaksana"
        }
    ]
  return (
    <div className='block md:hidden'>
        <div className=' bg-hijau-muda mb-2 border border-hijau-muda flex items-center rounded-xl mx-4 text-white h-16'>
            <div className='text-sm mx-2 flex items-center justify-between w-full'>
                <div className='flex'>
                <CgProfile className='text-4xl cursor-pointer'/>
                <div className='px-2 cursor-pointer'>
                    <h3>Hi, Arif Rafly wicaksana</h3>
                    <h2 className='font-bold font-roboto'>Start</h2>
                </div>
                </div>
                <MdNavigateNext className='text-2xl flex justify-end cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default Profile