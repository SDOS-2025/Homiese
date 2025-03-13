import Image from "next/image";
import TransitionButton from "@/app/Components/transitionButton";
import Link from "next/link";

export default function SideBar(){

    return (
        <div className="top-0 fixed w-[250] h-full shadow-xl bg-white flex flex-col item-center gap-y-12 py-5 text-black">
            <Image src="/Homiese.svg" alt="Homiese"  width={140} height={30} className="ml-12 mt-4"/>


                <div className="flex flex-col gap-y-2 shadow h-[270]">
                    <TransitionButton svg="/explore.svg" text={"Home"} />
                    <TransitionButton svg="/explore.svg" text={"Explore"} />
                    <TransitionButton svg="/explore.svg" text={"Collegenie"} />
                    <TransitionButton svg="/explore.svg" text={"Mentor"} />
                    <Link href="/college-Info">
                    <TransitionButton svg="/explore.svg" text={"College Info"} />
                </Link>
                    <TransitionButton svg="/settings.svg" text={"Settings"} />
                    
                    
                </div>
        </div>
    );
}