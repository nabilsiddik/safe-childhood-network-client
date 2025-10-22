"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ILogedInUser } from "@/types/userTypes"
import { signOut } from "next-auth/react"
import Link from "next/link"


export function NavbarDropdown({children, user}: {children: React.ReactNode, user: ILogedInUser}) {

  const handleLogout = async() => {
    await signOut({callbackUrl: '/'})
  }

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          {children}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-80 py-5 px-3" align="end">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <h3 className="font-bold text-lg">Hello, {user?.name}</h3>
            </DropdownMenuItem>
            <DropdownMenuItem>
              {user?.email ? 
                <Button onClick={handleLogout} className='w-full cursor-pointer'>Logout</Button>
              : 
                <Link href={'/'}>
                  <Button className='w-full cursor-pointer'>Login</Button>
                </Link>
              }
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
