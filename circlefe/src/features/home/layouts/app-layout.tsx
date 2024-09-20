import { Box } from "@chakra-ui/react";
import { LeftBar } from "../components/left-bar";
import { RightBar } from "../components/right-bar";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box display={"flex"}>
      <LeftBar />
      {children}
      <RightBar />
    </Box>
  );
}
