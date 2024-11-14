import { Group, Image } from "@mantine/core";

export default function Header() {
  return (
    <Group pos="fixed" top="0" w="100%" justify="center" bg="background" style={{ borderBottom: "1px solid #23232320", zIndex: "10" }}>
      <Image src='/logo.png' h="60" />
    </Group>
  );
}
