import { useAuthStore } from "@/store/store";
import { Button, Text } from "@chakra-ui/react";

export function Home() {
  const setUser = useAuthStore((state) => state.setUser);
  const { id, email, fullName } = useAuthStore((state) => state.currentUser);

  return (
    <>
      <Text>ID: {id}</Text>
      <Text>Email: {email}</Text>
      <Text>FullName: {fullName}</Text>
      <Button
        onClick={() =>
          setUser({
            id: 1,
            email: "a@gmail.com",
            fullName: "a",
          })
        }
      >
        Login
      </Button>
    </>
  );
}
