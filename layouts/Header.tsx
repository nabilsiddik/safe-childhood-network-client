import { NavbarDropdown } from "@/components/NavbarDropdown";
import Image from "next/image"
import { FaFacebookMessenger } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getCurrentUser } from "@/utils/getCurrentUser";

const Header = async() => {

    const user = await getCurrentUser()
    console.log('loged in user', user)

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
                    <li>
                        <NavbarDropdown>
                            <Avatar>
                                <AvatarImage className="border-3 rounded-full border-primary cursor-pointer" src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </NavbarDropdown>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
