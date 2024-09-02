import { AuthContext } from "@/context/auth";
import { useContext } from "react";

export function Home() {
  const { dispatch } = useContext(AuthContext);

  return (
    <>
      <button
        onClick={() => {
          dispatch({
            type: "SET_USER",
            payload: {
              id: 1,
              email: "test@gmail.com",
              name: "test",
              username: "test",
            },
          });
        }}
      >
        isi data user
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "CLEAR_USER",
          });
        }}
      >
        clear data user
      </button>
    </>
  );
}
