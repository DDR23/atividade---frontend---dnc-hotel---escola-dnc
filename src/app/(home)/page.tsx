'use client'
import { Carousel } from '@mantine/carousel';
import { Stack } from '@mantine/core';

const backgrounds = [
  {
    src: 'primeira',
    color: 'blue'
  },
  {
    src: 'segunda',
    color: 'red'
  },
  {
    src: 'terceira',
    color: 'green'
  },
]

export default function Home() {

  const slides = backgrounds.map((row, index) => (
    <Carousel.Slide key={index}>
      <Stack justify='center' ta='center' h='100vh' bg={row.color} pb='100'>
        {row.src}
      </Stack>
    </Carousel.Slide>
  ))

  return (
    // TODO - meu carousel deve ficar dentro do backgroundImage
    // TODO - meu card de login d register deve ser estatico
    <Carousel
      bg='dark'
      loop
    >
      {slides}
    </Carousel>
  );
}
