import { useRegisterForm } from "../hooks/use-register-form";

export function RegisterForm() {
  const { handleChange, handleSubmit } = useRegisterForm();

  return (
    <div>
      <h1 style={{ color: "#04A51E" }}>Circle</h1>
      <h1>Create account Circle</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "300px",
        }}
      >
        <input
          name="fullName"
          onChange={handleChange}
          type="text"
          placeholder="Full Name"
        />
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
          Create
        </button>
      </div>
      <p>
        Already have account? <span style={{ color: "#04A51E" }}>Login</span>
      </p>
    </div>
  );
}
