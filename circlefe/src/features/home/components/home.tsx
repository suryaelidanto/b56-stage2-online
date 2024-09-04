import { useAppDispatch, useAppSelector } from "@/hooks/use-store";
import { removeUser } from "@/store/auth-slice";
import { Button, Text } from "@chakra-ui/react";

export function Home() {
  const user = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  return (
    <>
      <Text>ID: {user.id}</Text>
      <Text>Email: {user.email}</Text>
      <Text>FullName: {user.fullName}</Text>
      <Button onClick={() => dispatch(removeUser())}>Logout</Button>
    </>
  );
}
