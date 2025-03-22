"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/app/Components/navbar";
import SideBar from "@/app/Components/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    const handleSearch = () => {
        if (searchQuery.trim() !== "") {
            setShowSearch(false); // Hide modal
            router.push(`/college-Info`); // Navigate to College Info page
        }
    };

    return (
        <div className="flex h-screen flex-1 overflow-auto bg-gray-200 relative">
            {/* Fixed Sidebar (Always Visible) */}
            <div className="w-[250px] z-20 fixed h-full bg-white shadow-lg">
                <SideBar onCollegeInfoClick={() => setShowSearch(true)} />
            </div>

            {/* Main Content Area */}
            <div className={`flex-1 transition-all duration-300 ${showSearch ? "blur-md" : ""}`}>
                <div className="fixed top-0 right-0 w-full bg-white shadow-md z-10">
                    <Navbar />
                </div>

                {/* Content below navbar */}
                <main className="flex-1 p-4 mt-[60px] ml-[250px]">{children}</main>
            </div>

            {/* Search Modal */}
            {showSearch && (
                <div className="fixed inset-0 bg-gray bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[600px]"> {/* Increased width */}
                        <h2 className="text-xl font-bold mb-4 text-gray-600">Enter College Name</h2>
                        <input
                            type="text"
                            placeholder="Search college..."
                            className="w-full h-[60px] p-4 border rounded-2xl shadow-lg outline-none text-blue-600 text-xl"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />

                        <div className="flex justify-end mt-4">
                            <button
                                className="bg-gray-300 px-4 py-2 rounded mr-2"
                                onClick={() => setShowSearch(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                                onClick={handleSearch}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
