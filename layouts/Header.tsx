import Image from "next/image"
import { FaFacebookMessenger } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";

const Header = () => {
    return (
        <header className="container mx-auto px-5 py-5 flex items-center justify-between gap-10">
            <div>
                {/* logo */}
                <Image src={'/images/logo/scn-logo.jpg'} width={100} height={100} alt="safe childhood network logo" />
            </div>
            <div>
                <ul className="flex items-center gap-5">
                    <li className="text-2xl w-10 h-10 bg-[#F1F4F5] flex items-center justify-center rounded-full relative cursor-pointer">
                        <div className="absolute top-[-5px] right-[-5px] bg-red-500 w-5 h-5 flex items-center justify-center rounded-full text-sm text-white">2</div>
                        <FaFacebookMessenger />
                    </li>
                    <li className="text-2xl w-10 h-10 bg-[#F1F4F5] flex items-center justify-center rounded-full relative cursor-pointer">
                        <div className="absolute top-[-5px] right-[-5px] bg-red-500 w-5 h-5 flex items-center justify-center rounded-full text-sm text-white">3</div>
                        <IoMdNotifications />
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
