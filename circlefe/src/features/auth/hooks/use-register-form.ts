import { useAppDispatch } from "@/hooks/use-store";
import { setUser } from "@/store/auth-slice";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { RegisterFormInputs, registerSchema } from "../schemas/register";
import { RegisterRequestDTO, RegisterResponseDTO } from "../types/dto";

export function useRegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  async function onSubmit(data: RegisterFormInputs) {
    try {
      const response = await axios.post<
        null,
        { data: RegisterResponseDTO },
        RegisterRequestDTO
      >("http://localhost:5000/api/v1/auth/register", {
        email: data.email,
        fullName: data.fullName,
        password: data.password,
      });

      const { id, email, fullName } = response.data;

      dispatch(
        setUser({
          id,
          email,
          fullName,
          
        })
      );

      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const {
          response: { data },
        } = error;

        setError(data.details[0].path[0], {
          message: data.details[0].message,
        });
      }
    }
  }

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
  };
}
