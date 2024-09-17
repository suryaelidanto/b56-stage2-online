import { Avatar, Box, Button, Text } from "@chakra-ui/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { CreateThreadDTO, Thread } from "../types/thread";

export function Home() {
  async function getThreads() {
    const response = await axios.get(
      `https://api.npoint.io/71a12152a5b230dd1e69`
    );
    return response.data;
  }

  const { data } = useQuery<null, Error, Thread[]>({
    queryKey: ["threads"],
    queryFn: getThreads,
  });

  const { mutateAsync: createThread, data: createdThreadData } = useMutation<
    CreateThreadDTO, // tipe data yang dikembalikan
    Error, // tipe data errornya
    CreateThreadDTO // tipe data request / payloadnya
  >({
    mutationKey: ["createThread"],
    mutationFn: async (data) => {
      return data;
    },
  });

  return (
    <>
      <Text>{JSON.stringify(createdThreadData)}</Text>
      <Button
        onClick={() =>
          createThread({
            content: "test",
            image: "mantap",
          })
        }
      >
        Create Thread
      </Button>
      {data?.map((thread) => {
        return (
          <Box display={"flex"} gap={"5px"} marginBottom={"20px"}>
            <Avatar src={thread.image} />
            <Box display={"flex"} flexDirection={"column"}>
              <Box display={"flex"} gap={"5px"}>
                <Text>{thread.fullName}</Text>
                <Text>@{thread.username}</Text>
                <Text>@{thread.createdAt}</Text>
              </Box>
              <Text>{thread.content}</Text>
              <Box display={"flex"} gap={"5px"}>
                <Button>Likes : {thread.likesCount}</Button>
                <Button>Replies : {thread.repliesCount}</Button>
              </Box>
            </Box>
          </Box>
        );
      })}
    </>
  );
}
