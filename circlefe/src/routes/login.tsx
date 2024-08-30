import { LoginForm } from "@/features/auth/components/login-form";
import { Box } from "@chakra-ui/react";

export default function LoginRoute() {
  return (
    <Box>
      <Box display="flex" justifyContent="center">
        <LoginForm />
      </Box>
    </Box>
  );
}
