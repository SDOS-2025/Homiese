import Image from "next/image";

export default function TransitionButton(
    {
        svg ,
        text
    } : {
        svg : string,
        text : string
    }

) {

    return (
        <div className="flex items-start gap-x-4 justify-start rounded-lg w-full px-12 py-2 flex-wrap  font-work-sans content-center text-md
            text-gray-700 hover:bg-gray-100 hover:text-red-400 cursor-pointer
        ">
            <Image src={svg} alt="Homiese" width={25} height={30} />

            {text}
        </div>
    );
}