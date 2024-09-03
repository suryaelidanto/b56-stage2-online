import { RegisterForm } from "@/features/auth/components/register-form";
import { Box, Text } from "@chakra-ui/react";

export default function RegisterRouteV2() {
  return (
    <Box>
      <Text as="h1">Welcome to register v2</Text>
      <Box display="flex" justifyContent="center">
        <RegisterForm />
      </Box>
    </Box>
  );
}
