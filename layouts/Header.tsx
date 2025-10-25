'use client'
import { NavbarDropdown } from "@/components/NavbarDropdown";
import Image from "next/image"
import { FaFacebookMessenger } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ILogedInUser } from "@/types/userTypes";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Header = () => {

    const { data: session } = useSession()
    const user = session?.user


    return (
        <header className="py-5 fixed bg-white w-full z-9999 left-0 right-0">
            <div className="container mx-auto px-5 flex items-center justify-between gap-10">
                <div>
                    {/* logo */}
                    <Link href={'/'}>
                        <Image src={'/images/logo/scn-logo.jpg'} width={100} height={100} alt="safe childhood network logo" />
                    </Link>
                </div>
                <div>
                    <ul className="flex items-center gap-5">
                        <Link href={'/conversations'}>
                            <li className="text-2xl w-10 h-10 bg-[#F1F4F5] flex items-center justify-center rounded-full relative cursor-pointer">
                                <div className="absolute top-[-5px] right-[-5px] bg-red-500 w-5 h-5 flex items-center justify-center rounded-full text-sm text-white">2</div>
                                <FaFacebookMessenger />
                            </li>
                        </Link>
                        <li className="text-2xl w-10 h-10 bg-[#F1F4F5] flex items-center justify-center rounded-full relative cursor-pointer">
                            <div className="absolute top-[-5px] right-[-5px] bg-red-500 w-5 h-5 flex items-center justify-center rounded-full text-sm text-white">3</div>
                            <IoMdNotifications />
                        </li>
                        {/* <li>
                        <NavbarDropdown user={user as ILogedInUser}>
                            <Avatar>
                                <AvatarImage className="border-3 rounded-full border-primary cursor-pointer" src={user?.image as string} />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </NavbarDropdown>
                    </li> */}
                    </ul>
                </div>
            </div>

        </header>
    )
}

export default Header
