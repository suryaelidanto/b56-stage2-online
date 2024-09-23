import { Box, Button, Input, Link, Text } from "@chakra-ui/react";
import { useLoginForm } from "../hooks/use-login-form";
import { Link as RRLink } from "react-router-dom";

export function LoginForm() {
  const { register, onSubmit, handleSubmit } = useLoginForm();

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input {...register("email")} type="email" placeholder="Email" />
          <Input
            {...register("password")}
            type="password"
            placeholder="Password"
          />
          <Button
            type="submit"
            backgroundColor="brand.green"
            _hover={{ backgroundColor: "brand.green-disabled" }}
            padding="20px"
            color="white"
            borderRadius="5px"
          >
            Login
          </Button>
        </form>
      </Box>
      <Text>
        Don't have an account yet?
        <Link as={RRLink} to="/register" color="brand.green">
          Create an account
        </Link>
      </Text>
    </Box>
  );
}
