import Image from "next/image";
import TransitionButton from "@/app/Components/transitionButton";
import Link from "next/link";

export default function SideBar(){

    return (
        <div className="top-0 fixed w-[250] h-full shadow-xl bg-white flex flex-col item-center gap-y-12 py-5">
            <Image src="/Homiese.svg" alt="Homiese"  width={140} height={30} className="ml-12 mt-4"/>


                <div className="flex flex-col gap-y-2 shadow h-[270]">
                    <TransitionButton svg="/explore.svg" text={"College Info"} />
                    <TransitionButton svg="/explore.svg" text={"Courses"} />
                    <TransitionButton svg="/explore.svg" text={"Admissions"} />
                    <TransitionButton svg="/explore.svg" text={"Fees"} />
                    <TransitionButton svg="/explore.svg" text={"Placements"} />
                    <TransitionButton svg="/settings.svg" text={"Scholarships"} />
                    <TransitionButton svg="/settings.svg" text={"Reviews"} />
                </div>
        </div>
    );
}