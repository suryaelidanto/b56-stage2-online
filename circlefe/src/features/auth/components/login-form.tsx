import { useLoginForm } from "../hooks/use-login-form";

export function LoginForm() {
  const { handleChange, handleSubmit } = useLoginForm();

  return (
    <div>
      <h1 style={{ color: "#04A51E" }}>Circle</h1>
      <h1>Login to Circle</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "300px",
        }}
      >
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email"
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
        />
        <button
          onClick={handleSubmit}
          style={{
            backgroundColor: "#04A51E",
            padding: "20px",
            color: "white",
            borderRadius: "5px",
          }}
        >
          Login
        </button>
      </div>
      <p>
        Don't have an account yet? <span style={{ color: "#04A51E" }}>Create account</span>
      </p>
    </div>
  );
}
