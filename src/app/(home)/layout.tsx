import Footer from "@/components/footer/footer";
import { Center, Flex, Image, Text } from "@mantine/core";

export default function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <>
      <Center>
        <Image src='/logo.png' h={60} />
      </Center>
      {children}
      <Footer />
    </>
  )
}