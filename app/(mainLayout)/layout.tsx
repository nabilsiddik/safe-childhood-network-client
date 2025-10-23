'use client'
import Header from "@/layouts/Header";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname()
  console.log(pathName, 'path')
  const shouldHideHeader = pathName.startsWith('/conversations')

  return (
    <div>
        {!shouldHideHeader && <Header/>}
        {children}
    </div>
  );
}
