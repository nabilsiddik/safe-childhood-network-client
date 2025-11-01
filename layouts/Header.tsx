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
    const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL

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
                        <Link href={user?.email === adminEmail ? '/conversations' : `/conversations/${conversations[0]?._id}`}>
                            <li className="text-2xl w-10 h-10 bg-[#F1F4F5] flex items-center justify-center rounded-full relative cursor-pointer">
                                {/* <div className="absolute top-[-5px] right-[-5px] bg-red-500 w-5 h-5 flex items-center justify-center rounded-full text-sm text-white">2</div> */}
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="24" cy="24" r="24" fill="#F1F4F5" />
                                    <path d="M23.4878 13.0002C21.4269 12.9888 19.4013 13.5359 17.6256 14.5835C15.8498 15.6311 14.3902 17.1403 13.4012 18.951C12.4123 20.7617 11.9309 22.8066 12.008 24.8691C12.0851 26.9315 12.7179 28.9346 13.8394 30.6662L12.0485 35.082C12.0015 35.2039 11.9909 35.3369 12.0179 35.4648C12.0449 35.5926 12.1084 35.7099 12.2007 35.8023C12.293 35.8948 12.4101 35.9583 12.5378 35.9854C12.6654 36.0124 12.7982 36.0018 12.92 35.9547L17.3295 34.1613C18.8313 35.1262 20.5371 35.7271 22.3114 35.9163C24.0857 36.1054 25.8795 35.8775 27.5505 35.2508C29.2214 34.624 30.7234 33.6157 31.937 32.3059C33.1506 30.996 34.0425 29.4208 34.5417 27.7053C35.041 25.9899 35.1338 24.1815 34.8129 22.4238C34.4919 20.6661 33.7661 19.0076 32.693 17.58C31.6199 16.1525 30.2291 14.9952 28.6312 14.2002C27.0332 13.4051 25.2721 12.9943 23.4878 13.0002Z" fill="#2D3F7B" />
                                    <path d="M30.0803 21.7154C30.0039 21.6025 29.8916 21.5186 29.7616 21.4774C29.6317 21.4362 29.4917 21.4402 29.3643 21.4885L24.8617 23.1801L22.702 21.0173C22.5795 20.9043 22.4197 20.8406 22.2532 20.8384C22.1705 20.8412 22.0892 20.8608 22.0143 20.8961C21.9394 20.9313 21.8724 20.9815 21.8175 21.0435L16.9373 26.537C16.8465 26.6388 16.7924 26.7681 16.7837 26.9044C16.775 27.0406 16.8123 27.1758 16.8894 27.2883C16.9666 27.4008 17.0793 27.4841 17.2094 27.5248C17.3395 27.5655 17.4794 27.5614 17.6069 27.513L22.1094 25.8214L24.2692 27.9842C24.3263 28.0415 24.3943 28.0868 24.4691 28.1175C24.5439 28.1482 24.624 28.1637 24.7049 28.1631H24.7223C24.805 28.1603 24.8863 28.1407 24.9612 28.1054C25.0361 28.0702 25.1031 28.02 25.158 27.958L30.0309 22.4688C30.1216 22.3671 30.1755 22.2378 30.1839 22.1017C30.1924 21.9655 30.1548 21.8305 30.0774 21.7184L30.0803 21.7154Z" fill="white" />
                                </svg>


                            </li>
                        </Link>
                        <li className="text-2xl w-10 h-10 bg-[#F1F4F5] flex items-center justify-center rounded-full relative cursor-pointer">
                            {/* <div className="absolute top-[-5px] right-[-5px] bg-red-500 w-5 h-5 flex items-center justify-center rounded-full text-sm text-white">3</div> */}
                            <svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6777 14.8243C18.603 12.525 18.631 11.6598 18.6804 10.0874C18.6931 9.71586 18.7058 9.31226 18.7058 8.84943C18.7058 5.17513 16.0045 0 10.0006 0C3.99665 0 1.29538 5.17513 1.29538 8.84943C1.29538 9.31103 1.30807 9.71586 1.32076 10.0874C1.37024 11.6598 1.39689 12.525 0.310795 14.8552C-0.153585 16.0203 -0.0977575 17.0262 0.479545 17.8457C1.86507 19.818 5.87447 20.0896 10.0006 20.0896C14.1267 20.0896 18.1361 19.818 19.5216 17.8457C20.1002 17.0262 20.156 16.0203 19.6777 14.8243Z" fill="#2D3F7B" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4229 21.339C11.3535 21.5624 9.11027 21.5611 6.55999 21.3365C6.17808 21.3069 5.79998 21.5031 5.62489 21.8425C5.44853 22.1832 5.50435 22.5917 5.76446 22.8756C6.90637 24.1184 8.40863 24.8047 9.99463 24.8047H9.99716C11.587 24.8047 13.093 24.1197 14.2375 22.8756C14.5001 22.5905 14.5547 22.1758 14.3745 21.8339C14.1931 21.4945 13.82 21.3044 13.4229 21.339Z" fill="#2D3F7B" />
                            </svg>

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
