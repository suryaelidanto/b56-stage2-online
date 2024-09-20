import { useAppSelector } from "@/hooks/use-store";
import { Box, Card, CardBody, Text } from "@chakra-ui/react";

export function RightBar() {
  return (
    <Box
      flex="1"
      backgroundColor={"brand.background"}
      border="1px solid white"
      padding={"30px"}
      gap={"5px"}
      display={"flex"}
      flexDirection={"column"}
    >
      <MyProfile />
      <SuggestedForYou />
      <Credit />
    </Box>
  );
}

export function MyProfile() {
  const { fullName, email } = useAppSelector((state) => state.auth);

  return (
    <Card>
      <CardBody>
        <Text as="h1">{fullName}</Text>
        <Text>@{email}</Text>
      </CardBody>
    </Card>
  );
}

export function SuggestedForYou() {
  return (
    <Card>
      <CardBody>
        <Text as="h1">Suggested For You</Text>
      </CardBody>
    </Card>
  );
}

export function Credit() {
  return (
    <Card>
      <CardBody>
        <Text as="h1">Developed By Your Name</Text>
      </CardBody>
    </Card>
  );
}
