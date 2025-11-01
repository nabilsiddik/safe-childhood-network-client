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

  if(pathName.startsWith('/conversations/') || pathName.startsWith('/account')){
    shouldHideHeader = true
  }

  return (
    <div>
        {!shouldHideHeader && <Header/>}
        {children}
        <BottomBar/>
    </div>
  );
}
