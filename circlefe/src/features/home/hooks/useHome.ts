import { ThreadEntity } from "@/entities/thread";
import {
  CreateThreadFormInputs,
  createThreadSchema,
} from "@/features/auth/schemas/thread";
import { apiV1 } from "@/libs/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { CreateThreadDTO } from "../types/thread";

export function useHome() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateThreadFormInputs>({
    resolver: zodResolver(createThreadSchema),
  });

  async function getThreads() {
    const response = await apiV1.get<null, { data: ThreadEntity[] }>(
      "/threads"
    );
    return response.data;
  }

  const { data, isLoading } = useQuery<ThreadEntity[], Error, ThreadEntity[]>({
    queryKey: ["threads"],
    queryFn: getThreads,
  });

  const queryClient = useQueryClient();

  async function createThread(data: CreateThreadDTO) {
    const response = await apiV1.post<null, { data: ThreadEntity }>(
      "/threads",
      data
    );

    queryClient.invalidateQueries({ queryKey: ["threads"] });

    return response.data;
  }

  const { mutateAsync: createThreadAsync } = useMutation<
    CreateThreadDTO,
    Error,
    CreateThreadDTO
  >({
    mutationKey: ["createThread"],
    mutationFn: createThread,
  });

  async function onSubmit(data: CreateThreadFormInputs) {
    await createThreadAsync(data);

    alert("Thread berhasil dibuat!");
  }

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
    data,
    isLoading,
  };
}
