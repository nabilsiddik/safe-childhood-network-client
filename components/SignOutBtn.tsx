'use client'
import { signOut } from "next-auth/react"

const SignOutBtn = () => {

    // user sign out
    const handleSignOut = () => {
        signOut({ callbackUrl: '/' })
    }

    return (
        <div className="flex justify-center mt-5">
            <button onClick={handleSignOut} id="signout-btn" className="flex items-center justify-center gap-2 cursor-pointer">
                <span>
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 18.5H3.83333C3.3471 18.5 2.88079 18.3068 2.53697 17.963C2.19315 17.6192 2 17.1529 2 16.6667V3.83333C2 3.3471 2.19315 2.88079 2.53697 2.53697C2.88079 2.19315 3.3471 2 3.83333 2H7.5M13.9167 14.8333L18.5 10.25M18.5 10.25L13.9167 5.66667M18.5 10.25H7.5" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </span>
                <span>Sign Out</span>
            </button>
        </div>
    )
}

export default SignOutBtn
