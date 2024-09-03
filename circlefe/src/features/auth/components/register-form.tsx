import { Box, Button, Input, Text } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { RegisterFormInputs, registerSchema } from "../schemas/register";

export function RegisterForm() {
  // const { handleChange, handleSubmit } = useRegisterForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });

  function onSubmit(data: RegisterFormInputs) {
    console.log(data);
  }

  return (
    <Box>
      <Text as="h1" fontSize={50} color={"brand.green"}>
        Circle
      </Text>
      <Text as="h1" fontSize={30}>
        Create account Circle
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection="column" gap="10px" width="300px">
          <Input
            {...register("fullName")}
            type="text"
            placeholder="Full Name"
          />
          {errors.fullName && (
            <p style={{ color: "red", margin: 0 }}>{errors.fullName.message}</p>
          )}

          <Input {...register("email")} type="email" placeholder="Email" />
          {errors.email && (
            <p style={{ color: "red", margin: 0 }}>{errors.email.message}</p>
          )}

          <Input
            {...register("password")}
            type="password"
            placeholder="Password"
          />
          {errors.password && (
            <p style={{ color: "red", margin: 0 }}>{errors.password.message}</p>
          )}

          <Button
            type="submit"
            backgroundColor="brand.green"
            padding="20px"
            color="white"
            borderRadius="5px"
          >
            Create
          </Button>
        </Box>
      </form>
      <Text>
        Already have account?
        <Link to={"/login"}>
          <Text as="span" color="brand.green">
            Login
          </Text>
        </Link>
      </Text>
    </Box>
  );
}
