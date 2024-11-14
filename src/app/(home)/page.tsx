"use client"
import { Carousel } from "@mantine/carousel";
import { Stack } from "@mantine/core";
// import { Anchor, BackgroundImage, Button, Group, Image, Modal, Stack, Text, Title } from "@mantine/core";
// import { useDisclosure } from "@mantine/hooks";
// import { useState } from "react";

const backgrounds = [
  {
    src: "primeira",
    color: "blue"
  },
  {
    src: "segunda",
    color: "red"
  },
  {
    src: "terceira",
    color: "green"
  },
]

export default function Home() {
  // const [opened, { open, close }] = useDisclosure(false);
  // const [modalContent, setModalContent] = useState<'login' | 'signup' | ''>('');

  // const handleOpen = (content: 'login' | 'signup') => {
  //   setModalContent(content);
  //   open();
  // };

  const slides = backgrounds.map((row, index) => (
    <Carousel.Slide key={index}>
      <Stack justify="center" ta="center" h="100vh" bg={row.color} pb="100">
        {row.src}
      </Stack>
    </Carousel.Slide>
  ))

  return (
    // TODO - meu carousel deve ficar dentro do backgroundImage
    // TODO - meu card de login d register deve ser estatico
    <Carousel
      bg="dark"
      loop
    >
      {slides}
    </Carousel>
  );
}

// <BackgroundImage src='picture_0.webp'>
//   <Stack w='100vw' h='100vh' align="center" justify="center" gap="sm">
//     <Image src='logo_0.webp' w={200} />
//     <Stack ta='center' align='center' gap={0}>
//       <Title order={1}>Sistema de gestão <Text span c="#c90000" inherit>Ômega Screen Ind</Text></Title>
//       <Title order={4}>Gerêncie facilmente informações de produtos e fornecedores.</Title>
//     </Stack>
//     <Group>
//       <Button onClick={() => handleOpen('login')}>
//         Entrar
//       </Button>
//       <Button onClick={() => handleOpen('signup')} variant="outline" c='#c90000' color='#c90000'>
//         Criar conta
//       </Button>
//     </Group>
//   </Stack>
// </BackgroundImage>



// <Modal opened={opened} onClose={close} withCloseButton={false} overlayProps={{ backgroundOpacity: 0.55, blur: 3 }}>
//   {modalContent === 'login' && (
//     <>
//       {/* <Signin /> */}
//       <Text c="dimmed" size="sm" ta="center" mt={20}>
//         Ainda nao tem uma conta?{' '}
//         <Anchor size="sm" c='#c90000' component="button" onClick={() => handleOpen('signup')}>
//           Criar conta
//         </Anchor>
//       </Text>
//     </>
//   )}
//   {modalContent === 'signup' && (
//     <>
//       {/* <Signup /> */}
//       <Text c="dimmed" size="sm" ta="center" mt={20}>
//         Já tem uma conta?{' '}
//         <Anchor size="sm" c='#c90000' component="button" onClick={() => handleOpen('login')}>
//           Entrar
//         </Anchor>
//       </Text>
//     </>
//   )}
// </Modal>