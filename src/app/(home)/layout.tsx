import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

export default function HomeLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
