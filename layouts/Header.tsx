'use client'
import Image from "next/image"
import { FaFacebookMessenger } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { IConversation } from "@/types/userTypes";

const Header = () => {
    const [conversations, setConversations] = useState<IConversation[] | []>([])
    const { data: session } = useSession()
    const user = session?.user
    const adminEmail = process.env.ADMIN_EMAIL

    useEffect(() => {
        const fetchConversation = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/conversation/${user?.email || ''}`)
            const data = await res.json()
            setConversations(data?.data)
        }

        fetchConversation()
    }, [user?.email])

    console.log(conversations[0]?._id, 'my conve')


    return (
        <header className="py-3 fixed bg-white w-full left-0 right-0 z-9999 border-b-3 border-[rgba(235,245,255,1)]">
            <div className="max-w-5xl mx-auto px-5 flex items-center justify-between gap-10">
                <div>
                    {/* logo */}
                    <Link href={'/'}>
                        <Image src={'/images/logo/scn-logo.jpg'} width={100} height={100} alt="safe childhood network logo" />
                    </Link>
                </div>
                <div>
                    <ul className="flex items-center gap-5">
                        <Link href={user?.email === adminEmail? '/conversations' : `/conversations/${conversations[0]?._id}`}>
                            <li className="text-2xl w-10 h-10 bg-[#F1F4F5] flex items-center justify-center rounded-full relative cursor-pointer">
                                {/* <div className="absolute top-[-5px] right-[-5px] bg-red-500 w-5 h-5 flex items-center justify-center rounded-full text-sm text-white">2</div> */}
                                <FaFacebookMessenger />
                            </li>
                        </Link>
                        <li className="text-2xl w-10 h-10 bg-[#F1F4F5] flex items-center justify-center rounded-full relative cursor-pointer">
                            {/* <div className="absolute top-[-5px] right-[-5px] bg-red-500 w-5 h-5 flex items-center justify-center rounded-full text-sm text-white">3</div> */}
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
