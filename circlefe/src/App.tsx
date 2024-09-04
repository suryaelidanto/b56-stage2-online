import { useEffect } from "react";
import { useAppDispatch } from "./hooks/use-store";
import { AppRouter } from "./routes";
import { setUser } from "./store/auth-slice";

function App() {
  const dispatch = useAppDispatch();

  async function checkAuthentication() {
    const id = Number(localStorage.getItem("id") as string);
    const email = localStorage.getItem("email") as string;
    const fullName = localStorage.getItem("fullName") as string;

    dispatch(
      setUser({
        id,
        email,
        fullName,
      })
    );
  }

  useEffect(() => {
    checkAuthentication();
  }, []);

  return <AppRouter />;
}

export default App;
