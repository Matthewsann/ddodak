import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserStore {
  email: string | null;
  setEmail: (email: string | null) => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      email: null,
      setEmail: (email) => set({ email }),
    }),
    {
      name: "user-storage",
    }
  )
);
