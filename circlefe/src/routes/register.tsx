import { RegisterForm } from "@/features/auth/components/register-form";
import { Box } from "@chakra-ui/react";

export default function RegisterRoute() {
  return (
    <Box>
      <Box display="flex" justifyContent="center">
        <RegisterForm />
      </Box>
    </Box>
  );
}
