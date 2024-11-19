import { notifications } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";

interface Props {
  title: string | undefined;
  message: string;
}

export default function NotificationShow({ title, message }: Props) {
  const notificationColor = title === 'Sucesso' ? 'green' : 'red';
  const notificationIcon = title === 'Sucesso' ? <IconCheck /> : <IconX />;

  notifications.show({
    title: title,
    message: message,
    position: 'top-right',
    autoClose: 3000,
    color: notificationColor,
    icon: notificationIcon
  });
}
