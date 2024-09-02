import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useRegisterForm } from "../hooks/use-register-form";
import { useNavigate } from "react-router-dom";

export function RegisterForm() {
  const { handleChange, handleSubmit } = useRegisterForm();
  const navigate = useNavigate()

  return (
    <Box>
      <Text as="h1" fontSize={50} color={"brand.green"}>
        Circle
      </Text>
      <Text as="h1" fontSize={30}>
        Create account Circle
      </Text>
      <Box display="flex" flexDirection="column" gap="10px" width="300px">
        <Input
          name="fullName"
          onChange={handleChange}
          type="text"
          placeholder="Full Name"
        />
        <Input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email"
        />
        <Input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
        />
        <Button
          onClick={handleSubmit}
          backgroundColor="brand.green"
          padding="20px"
          color="white"
          borderRadius="5px"
        >
          Create
        </Button>
      </Box>
      <Text>
        Already have account?
        <Text as="span" color="brand.green" onClick={() => navigate("/login")}>
          Login
        </Text>
      </Text>
    </Box>
  );
}
