import { Avatar, Box, Button, Image, Input, Text } from "@chakra-ui/react";
import { useHome } from "../hooks/use-home";

export function Home() {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
    data,
    isLoading,
  } = useHome();

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <Box padding={"30px"} backgroundColor={"brand.background"} flex="1">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box gap={"5px"} display={"flex"} flexDirection={"column"}>
          <Input {...register("content")} placeholder="content" color="white" />
          {errors.content && (
            <p style={{ color: "red", margin: 0 }}>{errors.content.message}</p>
          )}

          <Input
            type="file"
            {...register("image")}
            placeholder="image..."
            color="white"
          />
          {errors.image && (
            <p style={{ color: "red", margin: 0 }}>{errors.image.message}</p>
          )}

          <Button type="submit" backgroundColor={"brand.green"} color="white">
            {isSubmitting ? "Submitting..." : "Create Thread"}
          </Button>
        </Box>
      </form>
      {data?.map((thread) => {
        return (
          <Box display={"flex"} gap={"5px"} marginY={"20px"} key={thread.id}>
            <Avatar src={thread.user.image} />
            <Box display={"flex"} flexDirection={"column"}>
              <Box display={"flex"} gap={"5px"}>
                <Text color="white">{thread.user.fullName}</Text>
                <Text color="white">@{thread.user.fullName}</Text>
                <Text color="white">{thread.createdAt.toString()}</Text>
              </Box>
              <Image
                src={thread.image}
                width={"300px"}
                height={"300px"}
                objectFit={"cover"}
              />
              <Text color={"white"}>{thread.content}</Text>
              <Box display={"flex"} gap={"5px"}>
                <Button>Likes : {thread.likesCount}</Button>
                <Button>Replies : {thread.repliesCount}</Button>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
