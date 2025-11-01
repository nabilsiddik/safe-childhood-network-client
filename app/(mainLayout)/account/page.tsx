import { auth } from "@/auth"
import Image from "next/image"

const Account = async() => {

    const session = await auth()
    const user = session?.user

    return (
        <div className="bg-white">
            <div className="border-b-2 border-[rgba(235, 245, 255, 1)] h-20 flex items-center">
                <Image className="mx-auto " src={'/images/account_images/account-header-image.png'} alt="account header image" width={352} height={63} />
            </div>

            <div className="max-w-[430px] mx-auto px-3">
                <div id="account-profile" className="my-4 px-3 flex flex-col gap-2 justify-center mx-auto">
                    <Image className="mx-auto rounded-full mb-2" src={user?.email ? user?.image as string : '/images/account_images/profile-fallback.jpg'} alt="account header image" width={130} height={130} />
                    <h2 className="name text-center">{user?.name}</h2>
                </div>

                <div id="account-info" className="p-5 mt-3 mx-auto">
                    <div className="profile-input flex items-center gap-3 px-5 mb-3">
                        <span>
                            <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.8457 0H19.1543C20.172 0 21 0.920777 21 2.05256V13.9474C21 15.0792 20.172 16 19.1543 16H1.8457C0.827982 16 0 15.0792 0 13.9474V2.05256C0 0.920777 0.827982 0 1.8457 0ZM2.08659 1.36837L2.33293 1.59648L9.76771 8.48126C10.1921 8.87416 10.808 8.87416 11.2323 8.48126L18.6671 1.59648L18.9134 1.36837H2.08659ZM19.7695 2.35624L13.7119 7.96579L19.7695 12.4492V2.35624ZM1.8457 14.6316H19.1543C19.4516 14.6316 19.7002 14.3959 19.7572 14.0838L12.7253 8.87936L12.0196 9.5328C11.5794 9.94049 11.0396 10.1443 10.5 10.1443C9.96027 10.1443 9.42059 9.94049 8.98029 9.5328L8.27466 8.87936L1.24277 14.0837C1.29978 14.3959 1.54842 14.6316 1.8457 14.6316ZM1.23047 12.4492L7.28815 7.96584L1.23047 2.35624V12.4492Z" fill="#F69B32" />
                            </svg>
                        </span>
                        <span>
                            {user?.email}
                        </span>
                    </div>

                    <div className="profile-input flex items-center gap-3 px-5">
                        <span>
                            <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.8457 0H19.1543C20.172 0 21 0.920777 21 2.05256V13.9474C21 15.0792 20.172 16 19.1543 16H1.8457C0.827982 16 0 15.0792 0 13.9474V2.05256C0 0.920777 0.827982 0 1.8457 0ZM2.08659 1.36837L2.33293 1.59648L9.76771 8.48126C10.1921 8.87416 10.808 8.87416 11.2323 8.48126L18.6671 1.59648L18.9134 1.36837H2.08659ZM19.7695 2.35624L13.7119 7.96579L19.7695 12.4492V2.35624ZM1.8457 14.6316H19.1543C19.4516 14.6316 19.7002 14.3959 19.7572 14.0838L12.7253 8.87936L12.0196 9.5328C11.5794 9.94049 11.0396 10.1443 10.5 10.1443C9.96027 10.1443 9.42059 9.94049 8.98029 9.5328L8.27466 8.87936L1.24277 14.0837C1.29978 14.3959 1.54842 14.6316 1.8457 14.6316ZM1.23047 12.4492L7.28815 7.96584L1.23047 2.35624V12.4492Z" fill="#F69B32" />
                            </svg>
                        </span>
                        <span>
                            {user?.name}
                        </span>
                    </div>

                    <div className="flex justify-center mt-5">
                        <button id="signout-btn" className="flex items-center justify-center gap-2">
                            <span>
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 18.5H3.83333C3.3471 18.5 2.88079 18.3068 2.53697 17.963C2.19315 17.6192 2 17.1529 2 16.6667V3.83333C2 3.3471 2.19315 2.88079 2.53697 2.53697C2.88079 2.19315 3.3471 2 3.83333 2H7.5M13.9167 14.8333L18.5 10.25M18.5 10.25L13.9167 5.66667M18.5 10.25H7.5" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </span>
                            <span>Sign Out</span>
                        </button>
                    </div>

                </div>

                <div className="mt-20 max-w-[382px] h-[250px] mx-auto bg-[rgba(217,217,217,1)] rounded-xl">

                </div>

                <div className="mt-5 mb-30">
                    <Image className="mx-auto" src={'/images/account_images/account-about.png'} alt="about scn" width={380} height={1200} />
                </div>
            </div>



        </div>
    )
}

export default Account
