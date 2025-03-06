import Image from "next/image";
import TransitionButton from "@/app/Components/transitionButton";

export default function SideBar(){

    return (
        <div className="z-20 top-0 fixed w-[300] h-full shadow-xl bg-white flex flex-col justify-center gap-y-2">
            <Image src="/Homiese.svg" alt="Homiese"  width={140} height={30} />

            <TransitionButton svg="/explore.svg" text={"Home"} />
            <TransitionButton svg="/explore.svg" text={"Explore"} />
            <TransitionButton svg="/explore.svg" text={"Collegenie"} />
            <TransitionButton svg="/explore.svg" text={"Mentor"} />
            <TransitionButton svg="/settings.svg" text={"Settings"} />


        </div>
    );
}