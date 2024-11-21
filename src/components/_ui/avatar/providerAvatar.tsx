import React, { useState, useEffect } from 'react';
import { Avatar } from '@mantine/core';

interface Props {
  name: string
  size: any
}

function getInitials(name: string): string {
  const words = name.split(' ');
  const initials = words.slice(0, 2).map(word => word[0]).join('');
  return initials.toUpperCase();
}

function getRandomColor(): string {
  const colors = [
    'red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'cyan', 'teal', 'lime'
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

const ProviderAvatar: React.FC<Props> = ({ name, size }) => {
  const [color, setColor] = useState<string>('');

  useEffect(() => {
    const storedColor = localStorage.getItem('avatar-color');
    if (storedColor) {
      setColor(storedColor);
    } else {
      const newColor = getRandomColor();
      localStorage.setItem('avatar-color', newColor);
      setColor(newColor);
    }
  }, []);

  const initials = getInitials(name);

  return (
    <Avatar size={size} src={null} alt={name} color={color} mx='auto'>
      {initials}
    </Avatar>
  );
};

export default ProviderAvatar;
