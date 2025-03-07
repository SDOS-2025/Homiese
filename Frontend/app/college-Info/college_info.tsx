import React from "react";
import Layout from "@/app/layout";
import Image from "next/image";
import collegeData from "@/app/college-Info/collegeData.json";

export default function CollegePage() {
    const {
        name,
        logo,
        banner,
        highlights,
        admissionProcess,
        mentorButton,
        relatedPostsButton
    } = collegeData;

    return (

            <div className="p-6 max-w-4xl mx-auto">
                {/* Banner Image */}
                <div className="relative w-full h-48">
                    <Image src={banner} alt={name} layout="fill" objectFit="cover" className="rounded-lg" />
                </div>

                {/* College Info Header */}
                <div className="flex items-center mt-4">
                    <Image src={logo} alt={name} width={80} height={80} className="mr-4" />
                    <h1 className="text-2xl font-bold">{name}</h1>
                </div>

                {/* Buttons */}
                <div className="mt-4 flex gap-4">
                    <button className="bg-pink-500 text-white px-4 py-2 rounded-lg shadow">{mentorButton}</button>
                    <button className="bg-gray-300 text-black px-4 py-2 rounded-lg shadow">{relatedPostsButton}</button>
                </div>

                {/* College Highlights */}
                <div className="mt-6 p-4 bg-gray-900 text-white shadow-lg rounded-lg max-w-3xl">
                    <h2 className="text-xl font-semibold">IIIT Delhi Highlights 2024</h2>
                    <p className="mt-2 text-gray-300 text-justify">{highlights}</p>
                </div>

                {/* Admission Process */}
                <div className="mt-6 p-4 bg-gray-900 text-white shadow-lg rounded-lg max-w-3xl">
                    <h2 className="text-xl font-semibold">IIIT Delhi Admission Process and Important Dates 2024</h2>
                    <p className="mt-2 text-gray-300 text-justify">{admissionProcess}</p>
                </div>
            </div>
    );
}

