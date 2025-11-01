'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react"

const Authentication = () => {

  const handleGoogleLogin = () => {
     signIn('google', { callbackUrl: '/home' })
  }

  return (
    <div className='bg-secondary min-h-screen relative'>
      <div className="container mx-auto px-5 relative min-h-screen">
        <Image className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={'/images/logo/scn-home-logo.jpg'} alt='safe childhood network logo' width={300} height={300} />

        <Button
          onClick={handleGoogleLogin}
          size="lg" 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-md flex items-center gap-2 bg-white rounded-full py-6 text-black w-10/12 sm:w-8/12 md:w-5/12 lg:w-3/12 hover:bg-white cursor-pointer"
        >
          <div className='relative w-full'>
            <span className='absolute left-0 top-1/2 transform translate-y-[-50%]'>
              <FcGoogle className="text-5xl" />
            </span>
            <span>
              Continue with Google
            </span>
          </div>
        </Button>
      </div>
    </div>
  )
}

export default Authentication
