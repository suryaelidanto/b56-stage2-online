import { User } from "@/types/user";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type UseAuthStore = { currentUser: User } & {
  setUser: (user: User) => void;
};

export const useAuthStore = create<UseAuthStore>()(
  devtools(
    persist(
      (set) => ({
        currentUser: {
          id: 0,
          email: "",
          fullName: "",
        },
        setUser: (currentUser) => set((state) => ({ ...state, currentUser })),
      }),
      { name: "user" }
    )
  )
);
