import { Box, Button, Input } from "@chakra-ui/react";
import { useHome } from "../hooks/useHome";

export function Home() {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
    isLoading,
  } = useHome();

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <Box padding={"30px"} backgroundColor={"brand.background"} flex="1">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box gap={"5px"} display={"flex"} flexDirection={"column"}>
          <Input {...register("content")} placeholder="content" />
          {errors.content && (
            <p style={{ color: "red", margin: 0 }}>{errors.content.message}</p>
          )}

          <Input {...register("image")} placeholder="image..." />
          {errors.image && (
            <p style={{ color: "red", margin: 0 }}>{errors.image.message}</p>
          )}

          <Button type="submit" backgroundColor={"brand.green"}>
            {isSubmitting ? "Submitting..." : "Create Thread"}
          </Button>
        </Box>
      </form>
      {/* {data?.map((thread) => {
        return (
          <Box display={"flex"} gap={"5px"} marginY={"20px"}>
            <Avatar src={thread.user.image} />
            <Box display={"flex"} flexDirection={"column"}>
              <Box display={"flex"} gap={"5px"}>
                <Text>{thread.user.fullName}</Text>
                <Text>@{thread.user.fullName}</Text>
                <Text>{thread.createdAt.toString()}</Text>
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
      })} */}
    </Box>
  );
}
