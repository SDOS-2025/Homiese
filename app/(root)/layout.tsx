import React from "react";
import Navbar from "@/app/Components/navbar";
import SideBar from "@/app/Components/sidebar";

export default function Layout({children} : Readonly<{children : React.ReactNode}>) {

    return (
        <>
           <div className="h-screen w-full ">
               {children}
               <Navbar />
               <SideBar />

           </div>




        </>
    )
}