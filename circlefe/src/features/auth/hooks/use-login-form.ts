import { useAppDispatch } from "@/hooks/use-store";
import { setUser } from "@/store/auth-slice";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoginFormInputs, loginSchema } from "../schemas/login";
import { LoginRequestDTO, LoginResponseDTO } from "../types/dto";

export function useLoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  async function onSubmit(data: LoginFormInputs) {
    try {
      const response = await axios.post<
        null,
        { data: LoginResponseDTO },
        LoginRequestDTO
      >("http://localhost:5000/api/v1/auth/login", {
        email: data.email,
        password: data.password,
      });

      const {
        user: { id, email, fullName },
        token,
      } = response.data;

      dispatch(
        setUser({
          id,
          email,
          fullName,
        })
      );

      //TODO: use js cookie
      localStorage.setItem("token", token);

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
