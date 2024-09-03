import { Box } from "@chakra-ui/react";

export function RightBar() {
  return (
    <>
      <SuggestedForYou />
      <RightBarMyProfile />
      <Credit />
    </>
  );
}

export function RightBarMyProfile() {
  return <Box border={"2px solid black"}>Stella Audina</Box>;
}

export function SuggestedForYou() {
  return <Box border={"2px solid black"}>Suggested For You</Box>;
}

export function Credit() {
  return <Box border={"2px solid black"}>Developed by Your Name</Box>;
}
