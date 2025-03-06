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
        <div className="border-2 border-gray100 flex items-center gap-x-4 rounded-xl w-full px-12 py-2  ">
            <Image src={svg} alt="Homiese" width={30} height={30} />

            {text}

        </div>
    );
}