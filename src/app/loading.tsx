import { LoadingOverlay } from "@mantine/core";

export default function Loading() {
  return <LoadingOverlay
    visible={true}
    zIndex={1000}
    overlayProps={{
      radius: "sm",
      blur: 2
    }}
  />;
}
