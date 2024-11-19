import { Box, Progress, Text, Center, Group } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';

interface Props {
  value: string
}

function PasswordRequirement({ meets, label }: { meets: boolean; label: string }) {
  return (
    <Text component="div" c={meets ? 'teal' : 'red'} mt={5} size="sm">
      <Center inline>
        {meets ? <IconCheck size="0.9rem" stroke={1.5} /> : <IconX size="0.9rem" stroke={1.5} />}
        <Box ml={7}>{label}</Box>
      </Center>
    </Text>
  );
}

export const requirements = [
  { re: /[0-9]/, label: 'Conter número' },
  { re: /[a-z]/, label: 'Conter letra minúscula' },
  { re: /[A-Z]/, label: 'Conter letra maiúscula' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Conter caractere especial' },
];

function getStrength(password: string) {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 0);
}

export default function PasswordStrength({ value }: Props) {
  const strength = getStrength(value);
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(value)} />
  ));
  const bars = Array(4)
    .fill(0)
    .map((_, index) => (
      <Progress
        styles={{ section: { transitionDuration: '0ms' } }}
        value={
          value.length > 0 && index === 0 ? 100 : strength >= ((index + 1) / 4) * 100 ? 100 : 0
        }
        color={strength > 80 ? 'teal' : strength > 50 ? 'yellow' : 'red'}
        key={index}
        size={4}
      />
    ));

  return (
    <div>
      <Group gap={5} grow mt="xs" mb="md">
        {bars}
      </Group>
      <PasswordRequirement label="Conter pelo menos 6 caracteres" meets={value.length > 5} />
      {checks}
    </div>
  );
}
