"use client"

import React, { useEffect } from "react";
import Navbar from "@/app/(components)/Navbar/page"
import Sidebar from "@/app/(components)/Sidebar/page";
import StoreProvider, { useAppDispatch, useAppSelector } from "./redux";

function DashboardLayout ({children}: {children : React.ReactNode}) {
    const isSideCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed)
    const isDarkMode = useAppSelector((state) => state.global.isDarkMode)

    useEffect(() => {
        if (isDarkMode){
            document.documentElement.classList.add('dark');
        }
        else{
            document.documentElement.classList.add('light');
        }
    });

  return (
    <div className={`${isDarkMode ? 'dark' :' light'} flex bg-gray-50 text-gray-900 w-full min-h-screen`}>
        <Sidebar />
        <main className={`flex flex-col w-full h-full py-7 px9 bg-gray-50 ${isSideCollapsed ? "md:pl-24" : "md:pl-72"}`}>
            <Navbar />
            {children}
        </main> 
    </div>
  )
}

function DashboardWrapper ({children}: {children : React.ReactNode}) {
    return (
        <StoreProvider>
            <DashboardLayout>{children}</DashboardLayout>
        </StoreProvider>
    )
  }

export default DashboardWrapper 
