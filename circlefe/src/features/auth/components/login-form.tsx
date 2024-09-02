import { Box, Button, Text } from "@chakra-ui/react";
import { useLoginForm } from "../hooks/use-login-form";
import { Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const { handleChange, handleSubmit } = useLoginForm();
  const navigate = useNavigate();

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
        <Text as="span" color="brand.green" onClick={() => navigate("/register")}>
          Create account
        </Text>
      </Text>
    </Box>
  );
}
