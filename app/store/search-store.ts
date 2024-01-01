import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SearchStore {
  searchList: string[];
  addr: string;
  addSearch: (search: string) => void;
  setAddr: (addr: string) => void;
}

export const useSearchStore = create<SearchStore>()(
  persist(
    (set) => ({
      searchList: [],
      addSearch: (search: string) =>
        set((state) => ({
          searchList: [...state.searchList, search].slice(-5),
        })),
      addr: "성북구 안암동",
      setAddr: (addr: string) => set({ addr }),
    }),
    {
      name: "search-storage",
    }
  )
);
