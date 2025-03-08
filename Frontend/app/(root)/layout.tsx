import React from "react";
import Navbar from "@/app/Components/navbar";
import SideBar from "@/app/Components/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-1 overflow-auto bg-gray-200">
            {/* Fixed Sidebar */}
            <div className="w-[250px] z-20 fixed h-full bg-white shadow-lg">
                <SideBar />
            </div>

            {/* Main Content Area */}
            <div className="flex-1">
                <div className="fixed top-0 right-0 w-full bg-white shadow-md z-10">
                    <Navbar />
                </div>

                {/* Content below navbar */}
                <main className=" flex-1 p-4 mt-[60px]  ml-[250px]">{children}</main>
            </div>
        </div>
    );
}
