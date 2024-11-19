'use client';
import { Carousel } from '@mantine/carousel';
import { Anchor, BackgroundImage, Center, Paper, Text, Transition } from '@mantine/core';
import { useRef, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import SignIn from '@/components/auth/signIn';
import SignUp from '@/components/auth/signUp';

const backgrounds = [
  { src: './picture_01.png' },
  { src: './picture_02.png' },
  { src: './picture_03.png' },
];

export default function Home() {
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  const [paperContent, setPaperContent] = useState<'signIn' | 'signUp'>('signIn');

  const slides = backgrounds.map((row, index) => (
    <Carousel.Slide key={index}>
      <BackgroundImage
        src={row.src}
        h='100vh'
        opacity={0.7}
      >
      </BackgroundImage>
    </Carousel.Slide>
  ));

  return (
    <>
      <Carousel
        loop
        withControls={false}
        draggable={false}
        plugins={[autoplay.current]}
      >
        {slides}
      </Carousel>
      <Center h='100vh' w='100vw' pb='60px' style={{
        position: 'absolute',
        zIndex: 10,
        top: 0,
      }}>
        <Transition mounted={paperContent === 'signIn'} transition="slide-right" duration={250} timingFunction="ease">
          {(styles) => (
            <Paper w='25rem' maw='90vw' shadow='lg' radius='md' p='lg' bg='background' style={{
              ...styles,
              position: 'absolute'
            }}>
              <SignIn />
              <Text c="dimmed" size="sm" ta="center" mt={20}>
                Ainda nao tem uma conta?{' '}
                <Anchor size="sm" component="button" onClick={() => setPaperContent('signUp')}>
                  Criar conta
                </Anchor>
              </Text>
            </Paper>
          )}
        </Transition>
        <Transition mounted={paperContent === 'signUp'} transition="slide-left" duration={250} timingFunction="ease">
          {(styles) => (
            <Paper w='25rem' maw='90vw' shadow='lg' radius='md' p='lg' bg='background' style={{
              ...styles,
              position: 'absolute'
            }}>
              {/* <SignUp /> */}
              <Text c="dimmed" size="sm" ta="center" mt={20}>
                Já tem uma conta?{' '}
                <Anchor size="sm" component="button" onClick={() => setPaperContent('signIn')}>
                  Entrar
                </Anchor>
              </Text>
            </Paper>
          )}
        </Transition>
      </Center>
    </>
  );
}
