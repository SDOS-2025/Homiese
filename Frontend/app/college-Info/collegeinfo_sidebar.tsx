// import Image from "next/image";
// import TransitionButton from "@/app/Components/transitionButton";
// import Link from "next/link";

// export default function SideBar(){

//     return (
//         <div className="top-0 fixed w-[250] h-full shadow-xl bg-white flex flex-col item-center gap-y-12 py-5">
//             <Image src="/Homiese.svg" alt="Homiese"  width={140} height={30} className="ml-12 mt-4"/>


//                 <div className="flex flex-col gap-y-2 shadow h-[270]">
//                     <TransitionButton svg="/explore.svg" text={"College Info"} />
//                     <TransitionButton svg="/explore.svg" text={"Courses"} />
//                     <TransitionButton svg="/explore.svg" text={"Admissions"} />
//                     <TransitionButton svg="/explore.svg" text={"Fees"} />
//                     <TransitionButton svg="/explore.svg" text={"Placements"} />
//                     <TransitionButton svg="/settings.svg" text={"Scholarships"} />
//                     <TransitionButton svg="/settings.svg" text={"Reviews"} />
//                 </div>
//         </div>
//     );
// }

"use client";  // Mark as Client Component
import Image from "next/image";
import TransitionButton from "@/app/Components/transitionButton";

export default function SideBar() {

    // Function to scroll to section
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="top-0 fixed w-[250px] h-full shadow-xl bg-white flex flex-col items-center gap-y-12 py-5">
            <Image src="/Homiese.svg" alt="Homiese" width={140} height={30} className="ml-12 mt-4"/>

            <div className="flex flex-col gap-y-2 shadow h-[270px]">
                <TransitionButton svg="/explore.svg" text="College Info" onClick={() => scrollToSection("college-info")} />
                <TransitionButton svg="/explore.svg" text="Courses" onClick={() => scrollToSection("courses")} />
                <TransitionButton svg="/explore.svg" text="Admissions" onClick={() => scrollToSection("admissions")} />
                <TransitionButton svg="/explore.svg" text="Fees" onClick={() => scrollToSection("fees")} />
                <TransitionButton svg="/explore.svg" text="Placements" onClick={() => scrollToSection("placements")} />
                <TransitionButton svg="/settings.svg" text="Scholarships" onClick={() => scrollToSection("scholarships")} />
                <TransitionButton svg="/settings.svg" text="Reviews" onClick={() => scrollToSection("reviews")} />
            </div>
        </div>
    );
}
