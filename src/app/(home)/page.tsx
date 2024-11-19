'use client';
import { Carousel } from '@mantine/carousel';
import { BackgroundImage, Card, Center } from '@mantine/core';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

const backgrounds = [
  { src: './picture_01.png' },
  { src: './picture_02.png' },
  { src: './picture_03.png' },
];

export default function Home() {
  const autoplay = useRef(Autoplay({ delay: 4000 }));

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
        <Card w='20rem' h='20rem' bg='background'>
          teste
        </Card>
      </Center>
    </>
  );
}
