import Image from "next/image";

export default function Navbar() {

    return (
    <div className="flex gap-x-10 justify-end shadow-sm bg-white h-16">

        <div className="flex items-center gap-x-4 font-work-sans mx-6">
            <Image src="/chat.png" alt="Chat"  width={40} height={30}/>
            <Image src="/notification.png" alt="Chat"  width={40} height={30}/>

            <Image src="/User.png" alt="Login"  width={40} height={40}/>
            {/*User Name*/}
            <span>Shaan Alam </span>
            <Image src="/Dropdown.png" alt="Login"  width={15} height={15}/>
            
        </div>
    </div>
    );
}

