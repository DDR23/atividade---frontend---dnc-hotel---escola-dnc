'use client'
import { Flex, Text, Avatar, Group, Image } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { useEffect, useState } from 'react';

interface User {
  login: string;
  avatar: string;
}

export default function Footer() {
  const [user, setUser] = useState<User | null>(null);
  const { hovered, ref } = useHover();

  useEffect(() => {
    fetch('https://api.github.com/users/DDR23')
      .then(res => res.json())
      .then(data => setUser({
        login: data.login,
        avatar: data.avatar_url,
      }));
  }, []);

  return (
    <Group pos='fixed' bottom='0' w='100%' justify='center' bg='background' style={{ borderBottom: '1px solid #23232320', zIndex: '10' }}>
      <Flex direction='column' align='center' gap='xs' m='lg' mt='xs'>
        <Flex direction='column' mx='auto' maw='92vw' ta='center'>
          <Group my='xs' justify='center' gap='1'>
            <Text component='a' href='/about' fz='xs' px='xs' c='blue'>About</Text>
            <Text fz='xs' px='xs' c='dimmed' style={{ cursor: 'default' }}>Terms and Conditions</Text>
            <Text fz='xs' px='xs' c='dimmed' style={{ cursor: 'default' }}>FAQ</Text>
            <Text component='a' href='https://wa.me/5581981708405' target='_blank' fz='xs' px='xs' c='blue'>Contact Us</Text>
          </Group>
          <Text fz='10px' ff='monospace'>© 2024 Escola DNC - Hotels, Inc.</Text>
        </Flex>
        {user && (
          <Group justify='center' gap='xs'>
            <Avatar component='a' href='https://github.com/DDR23' target='_blank' src={user.avatar} alt={user.login} size='md' />
            <Group gap='6px' ref={ref}>
              <Text ff='monospace' fz='12px' c='dimmed'>powered by </Text>
              <Text fz='12px' c={hovered ? 'blue' : 'dimmed'} component='a' href='https://github.com/DDR23' target='_blank' ff='monospace'>{user.login}</Text>
              <Image src='/br.png' w={'md'} alt='brazil-flag' />
            </Group>
          </Group>
        )}
      </Flex>
    </Group>
  );
}
