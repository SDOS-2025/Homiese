import React from "react";
import Navbar from "@/app/Components/navbar";
import SideBar from "@/app/Components/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">

            <div className="w-[300px]">
                <SideBar />
            </div>

            <div className="flex-1">
                <Navbar />
                <main className="p-4">{children}</main>
            </div>
        </div>
    );
}
