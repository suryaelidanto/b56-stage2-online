import { z } from "zod";

export const registerSchema = z.object({
  fullName: z.string().min(1, "full name is required!"),
  email: z.string().email("invalid email address!"),
  password: z.string().min(4, "password must be at least 4 characters!"),
});

export type RegisterFormInputs = z.infer<typeof registerSchema>