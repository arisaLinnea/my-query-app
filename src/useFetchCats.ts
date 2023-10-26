import { useQuery } from "react-query";
import { CatApiResponse } from "./types";
import axios from "axios";

const retrievePosts = async () => {
  const response = await axios.get<CatApiResponse>(
    "https://catfact.ninja/breeds?limit=10"
  );

  return response.data.data;
};

export const useFetchCats = () => {
  return useQuery("catData", retrievePosts);
};
