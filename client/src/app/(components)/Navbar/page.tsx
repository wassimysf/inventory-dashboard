"use client";

import { useAppDispatch, useAppSelector } from '@/app/redux';
import { SetIsDarkMode, SetIsSidebarCollapsed } from '@/state';
import { Bell, Link, Menu, Moon, Settings, Sun } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const Navbar = () => {
     const dispatch = useAppDispatch();
        const isSideCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed)
        const isDarkMode = useAppSelector((state) => state.global.isDarkMode)
    
        const toggleSidebar = (() =>{
            dispatch(SetIsSidebarCollapsed(!isSideCollapsed))
        }) 

        const toggleDarkMode = (() => {
            dispatch(SetIsDarkMode(!isDarkMode))
        })
    
        const sidebarClassName = `fixed flex flex-col ${
            isSideCollapsed ? "w-0 md:w16" : "w-72 md:w-64"
        } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`

  return (
    <div className='flex justify-between items-center w-full mb-7'>
        {/*LEFT SIDE*/}
        <div className='flex justify-between items-center gap-5'>
        <button className='px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100' onClick={toggleSidebar}>
                <Menu className='w-4 h-4'/>
            </button>
        <div className='relative'>
            <input type="search" placeholder='Start type to serach groups & products'
            className='pl-10 pr-4 py-2 w-50 md:w-60 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500'
            />
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <Bell className='text-gray-500' size={20} />
            </div>
        </div>
        </div>

        {/*RIGHT SIDE*/}

        <div className='flex justify-between items-center gap-5 pr-6' >
            <div className='hidden md:flex justify-between items-center gap-5'>
                <div>
                    <button onClick={toggleDarkMode}>
                        {isDarkMode ? (
                            <Sun className='cursor-pointer text-gray-500 ' size={24}/>
                        ): <Moon className='cursor-pointer text-gray-500 ' size={24}/>}
                    </button>
                </div>
                <div className='relative'>
                    <Bell className='cursor-pointer text-gray-500' size={24}/>
                    <span className='absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full'>
                        3
                    </span>
                </div>
                <hr className='w-0 h-7 border border-solid border-l border-gray-300 mx-3'/>
                <div className='flex items-center gap-3 cursor-pointer'>
                    <Image 
                    src="/profile.PNG"
                    alt="profile"
                    width={50}
                    height={50}
                    className='rounded-full h-full object-cover'
                    />
                    <span className='font-semibold'>Wassim Youssef</span>
                </div>
            </div>
            {/* <Link href='/settings' >
            <Settings className='cursor-pointer text-gray-500' size={24} />
            </Link> */}
            <Settings href='/settings' className='cursor-pointer text-gray-500' size={24} />
        </div>

    </div>
  )
}

export default Navbar