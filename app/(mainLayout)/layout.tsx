import Header from "@/layouts/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div>
        <Header/>
        {children}
    </div>
  );
}
