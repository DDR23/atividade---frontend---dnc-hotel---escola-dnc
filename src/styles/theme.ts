'use client';
import { createTheme, rem } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'blue',
  fontFamily: 'Alata, sans-serif',
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(20),
  },
  colors: {
    blue: [
      '#e5f3ff',
      '#cee1ff',
      '#9cc1ff',
      '#669efd',
      '#3a81fb',
      '#1f6efb',
      '#0c65fc',
      '#0054e1',
      '#004bca',
      '#0040b3'
    ]
  }
});
