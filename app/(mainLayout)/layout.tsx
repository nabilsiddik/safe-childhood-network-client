'use client'
import Header from "@/layouts/Header";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname()
  const hideHeaderRoutes = ['/chat']
  const shouldHideHeader = hideHeaderRoutes.includes(pathName)

  return (
    <div>
        {!shouldHideHeader && <Header/>}
        {children}
    </div>
  );
}
