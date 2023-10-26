import { create } from "zustand";
import { Cat, CatState } from "./types";
import { devtools, persist } from "zustand/middleware";

// export const useStore = create((set) => ({
//   catFavorite: [],
//   addFavorite: (cat: Cat) =>
//     set((state: CatState) => ({
//       catFavorite: [...state.catFavorite, cat.breed],
//     })),
//   removeFavorite: (cat: Cat) =>
//     set((state: CatState) => ({
//       catFavorite: state.catFavorite.filter((catName) => catName !== cat.breed),
//     })),
// }));

export const useCatStore = create(
  devtools(
    persist<CatState>( // <-- persist middleware
      (set) => ({
        catFavorite: [],
        addFavorite: (cat: Cat) => {
          set((state) => ({
            catFavorite: [...state.catFavorite, cat.breed],
          }));
        },
        removeFavorite: (cat: Cat) =>
          set((state: CatState) => ({
            catFavorite: state.catFavorite.filter(
              (catName) => catName !== cat.breed
            ),
          })),
      }),
      { name: "cat-storage" } // <-- unique name for local storage
    ),
    { anonymousActionType: "catStore" } // <-- devtools middleware name (visible in Redux devtools)
  )
);
