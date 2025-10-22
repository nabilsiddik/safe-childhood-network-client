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

export function NavbarDropdown({children}: {children: React.ReactNode}) {

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          {children}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-80 py-5 px-3" align="end">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <h3 className="font-bold text-lg">Hello, নাবিল সিদ্দিক</h3>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button className='w-full cursor-pointer'>Login</Button>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
