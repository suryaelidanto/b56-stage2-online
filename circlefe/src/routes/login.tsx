import { LoginForm } from "@/features/auth/components/login-form";

export default function LoginRoute() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <LoginForm />
      </div>
    </div>
  );
}
