import { useState } from "react";
import Post from "@/app/Components/Post";

export default function Content() {
    const [forYou, setForYou] = useState<boolean>(true);

    const Trendingposts = [
        {
            ContentDescription: "This is a trending page",
            ContentImage: true,
            ContentPostedBy: "You",
            ContentProfileImage: "/UserImg.svg",
            ContentTitle: "SDOS Sucks",
            ContentLiked: 26,
            ContentImagePath: "/contentImage.svg",
        },
        {
            ContentDescription: "React is awesome!",
            ContentImage: false,
            ContentPostedBy: "John Doe",
            ContentProfileImage: "/UserImg.svg",
            ContentTitle: "Why React Rocks",
            ContentLiked: 102,
            ContentImagePath: "",
        }
    ];

    const Userposts = [
        {
            ContentDescription: "This is a User page",
            ContentImage: true,
            ContentPostedBy: "You",
            ContentProfileImage: "/UserImg.svg",
            ContentTitle: "SDOS Sucks",
            ContentLiked: 26,
            ContentImagePath: "/contentImage.svg",
        },
        {
            ContentDescription: "React is awesome!",
            ContentImage: false,
            ContentPostedBy: "John Doe",
            ContentProfileImage: "/UserImg.svg",
            ContentTitle: "Why React Rocks",
            ContentLiked: 102,
            ContentImagePath: "",
        }
    ];

    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-center py-[2%]">
                {/* "For You" Button */}
                <div
                    onClick={() => setForYou(true)}
                    className={`rounded-l-xl shadow-sm w-[50%] h-10 flex justify-center items-center cursor-pointer 
                        ${forYou ? "bg-red-400 text-white" : "bg-white text-black"}
                    `}
                >
                    For You
                </div>

                {/* "Trending" Button */}
                <div
                    onClick={() => setForYou(false)}
                    className={`rounded-r-xl shadow-sm w-[50%] h-10 flex justify-center items-center cursor-pointer 
                        ${!forYou ? "bg-red-400 text-white" : "bg-white text-black"}
                    `}
                >
                    Trending
                </div>
            </div>

            <div className={"flex flex-col gap-5"}>

                {!forYou && Trendingposts.map((post, index) => (
                    <Post key={index} {...post} />
                ))}

                {forYou && Userposts.map((post, index) => (
                    <Post key={index} {...post} />
                ))}
            </div>
        </div>
    );
}
