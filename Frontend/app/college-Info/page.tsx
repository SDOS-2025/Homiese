import React from "react";
import Navbar from "@/app/Components/navbar";
import SideBar from "@/app/Components/sidebar";
import CollegePage from "@/app/college-Info/college_info";


export default function CollegeInfoPage({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <div className="w-[300px] bg-gray-100">
                <SideBar />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
                <Navbar />
                
                {/* Ensure CollegePage is inside the main content */}
                <div className="p-6">
                    <CollegePage />
                </div>
            </div>
        </div>
    );
}
