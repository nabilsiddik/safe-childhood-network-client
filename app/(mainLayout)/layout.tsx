'use client'
import BottomBar from "@/components/BottomBar";
import Header from "@/layouts/Header";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname()
  let shouldHideHeader
  let shouldHideBottomBar

  if(pathName.startsWith('/conversations/') || pathName.startsWith('/account')){
    shouldHideHeader = true
  }

  if(pathName.startsWith('/conversations/')){
    shouldHideBottomBar = true
  }

  return (
    <div>
        {!shouldHideHeader && <Header/>}
        {children}
        {!shouldHideBottomBar && <BottomBar/>}
    </div>
  );
}
