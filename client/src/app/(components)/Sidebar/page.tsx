'use client'

import React from 'react'
import { Archive, CircleDollarSign, ClipboardIcon, Icon, Layout, LucideIcon, Menu, Settings, SlidersHorizontal, User2Icon } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '@/app/redux'
import Link from 'next/link'
import { SetIsSidebarCollapsed } from '@/state';
import { usePathname } from 'next/navigation';
import Image from 'next/image'

interface SidebarLinkProps {
    href: string;
    icon: LucideIcon;
    label: string;
    isCollapsed: boolean;
  }
  
  const SidebarLink = ({
    href,
    icon: Icon,
    label,
    isCollapsed,
  }: SidebarLinkProps) => {
    const pathname = usePathname();
    const isActive =
      pathname === href || (pathname === "/" && href === "/dashboard");
  
    return (
      <Link href={href}>
        <div
          className={`cursor-pointer flex items-center ${
            isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
          }
          hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${
            isActive ? "bg-blue-200 text-white" : ""
          }
        }`}
        >
          <Icon className="w-6 h-6 !text-gray-700" />
  
          <span
            className={`${
              isCollapsed ? "hidden" : "block"
            } font-medium text-gray-700`}
          >
            {label}
          </span>
        </div>
      </Link>
    );
  };

// interface SidebarLinkProps {
//     href: string;
//     icon: LucideIcon;
//     label: string;
//     isCollapsed: boolean;
// }

// const SidebarLink = ({
//     href,
//     icon: Icon,
//     label,
//     isCollapsed,

// }: SidebarLinkProps) => {
//     const pathname = usePathname()
//     const isActive = pathname === href || (pathname === '/' && href === '/dashboard');

//     return (
//         <Link href={href}>
//             <div className={`cursor-pointer flex items-center 
//                 ${isCollapsed ? 'justify-center py-4' : 'justify-start px-8 py-4 '}
//                 hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${isActive ? 'bg-blue-200 text-white' :
//                     ''}`}>
//                 <Icon className='w-6 h-6 !text-gray-700'/>

//                 <span className={`${isCollapsed ? "hidden" : "block"} font-medium text-gray-700`}>

//                 </span>

//             </div>
//         </Link>
//     )
// }

function Sidebar() {
    const dispatch = useAppDispatch();
    const isSideCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed)

    const toggleSidebar = (() =>{
        dispatch(SetIsSidebarCollapsed(!isSideCollapsed))
    }) 

    const sidebarClassName = `fixed flex flex-col ${
        isSideCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
    } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`

  return (
    <div className={sidebarClassName}>
        {/* TOP LOGO */}
        <div className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${isSideCollapsed ? "px-5" : "px-8"}`}>
          <Image
            src="/logo.png"
            alt="edstock-logo"
            width={33}
            height={33}
            className="rounded w-8"
          />
            <h1 className={`${isSideCollapsed ? "hidden" : "block"} font-extrabold text-2xl`}>EDSTOCK</h1>
            <button className='md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100' onClick={() => {}}>
            <Menu className="w-4 h-4" />
        </button>
        </div>
        {/* LINKS */}
        <div className="flex-grow mt-8">
        <SidebarLink
          href="/dashboard"
          icon={Layout}
          label="Dashboard"
          isCollapsed={isSideCollapsed}
        />
        <SidebarLink
          href="/inventory"
          icon={Archive}
          label="Inventory"
          isCollapsed={isSideCollapsed}
        />
        <SidebarLink
          href="/products"
          icon={ClipboardIcon}
          label="Products"
          isCollapsed={isSideCollapsed}
        />
        <SidebarLink
          href="/users"
          icon={User2Icon}
          label="Users"
          isCollapsed={isSideCollapsed}
        />
        <SidebarLink
          href="/settings"
          icon={SlidersHorizontal}
          label="Settings"
          isCollapsed={isSideCollapsed}
        />
        <SidebarLink
          href="/expenses"
          icon={CircleDollarSign}
          label="Expenses"
          isCollapsed={isSideCollapsed}
        />
      </div>

        {/* FOOTER */}
        <div className={`${isSideCollapsed ? 'hidden' : 'block'} mb-10`}>
            <p className='text-center text-xs text-gray-500'>&copy; 2025 Edstock</p>
        </div>
    </div>
  )
}

export default Sidebar