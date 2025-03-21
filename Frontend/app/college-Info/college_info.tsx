"use client"

import React, {useState} from "react";
import Image from "next/image";
import collegeData from "@/app/college-Info/collegeData.json";
import CollegeAbout from "@/app/Components/collegeAbout";
import MentorPage from "@/app/Components/MentorPage";
import RelatedPostsCollege from "@/app/Components/relatedPostsCollege";

export default function CollegePage() {
    const {
        name,
        logo,
        banner,
        highlights,
        admissionProcess,
        mentors,
        courses,
        fees,
        placements,
        scholarships,
        reviews
    } = collegeData;


    const [tab, setTab] = useState<number>(0);

    // tab = 0 => info page
    // tab = 1 => mentors page
    // tab = 2 => relatedPost page

    return (

        <div className="p-6 flex flex-col gap-y-4 max-w-4xl mx-auto">
            {/* banner Image */}
            <div className="relative w-full h-48">
                <Image src={banner} alt={name} layout="fill" objectFit="cover" className="rounded-lg"/>
            </div>

            {/* College Info Header */}
            <div className="flex items-center">
                <Image src={logo} alt={name} width={80} height={80} className="mr-4"/>
                <h1 className="text-2xl font-bold text-gray-500">{name}</h1>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
               <div
                    onClick={() => setTab(0)}
                    className={`rounded-xl shadow-sm w-[50%] h-10 flex justify-center items-center cursor-pointer 
                        ${tab === 0 ? "bg-red-400 text-white" : "bg-white text-black"}
                    `}
                >
                    Info
                </div>

                <div
                    onClick={() => setTab(1)}
                    className={`rounded-xl shadow-sm w-[50%] h-10 flex justify-center items-center cursor-pointer 
                        ${tab === 1 ? "bg-red-400 text-white" : "bg-white text-black"}
                    `}
                >
                    Mentors
                </div>

                <div
                    onClick={() => setTab(2)}
                    className={`rounded-xl shadow-sm w-[50%] h-10 flex justify-center items-center cursor-pointer 
                        ${tab === 2 ? "bg-red-400 text-white" : "bg-white text-black"}
                    `}
                >
                    Related Posts
                </div>



            </div>

            {tab === 0 && (
                <CollegeAbout
                    Highlights={highlights}
                    Courses={courses}
                    Fees={fees}
                    Placements={placements}
                    Scholarships={scholarships}
                    Reviews={reviews}
                    AdmissionProcess={admissionProcess}
                />
            )}

            {tab === 1 && (
                <MentorPage mentors={mentors} />
            )}

            {tab === 2 && (
                <RelatedPostsCollege />
            )}



        </div>
    );
}

