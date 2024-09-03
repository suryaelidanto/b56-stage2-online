import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useLoginForm } from "../hooks/use-login-form";
import { ChakraLink } from "@/components/link";

export function LoginForm() {
  const { handleChange, handleSubmit } = useLoginForm();

  return (
    <Box>
      <Text as="h1" fontSize={50} color={"brand.green"}>
        Circle
      </Text>
      <Text as="h1" fontSize={30}>
        Login to Circle
      </Text>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "300px",
        }}
      >
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
          _hover={{ backgroundColor: "brand.green-disabled" }}
          padding="20px"
          color="white"
          borderRadius="5px"
        >
          Login
        </Button>
      </Box>
      <Text>
        Don't have an account yet?
        <ChakraLink to="/register" color="brand.green">Create an account</ChakraLink>
      </Text>
    </Box>
  );
}
