export type Cat = {
  breed: string;
  country: string;
  origin: string;
  coat: string;
  pattern: string;
};

export type CatState = {
  catFavorite: string[];
  addFavorite: (cat: Cat) => void;
  removeFavorite: (cat: Cat) => void;
};

export interface CatApiResponse {
  data: Cat[];
}

export type CardProps = {
  cat: Cat;
  isFavorite: boolean;
};
