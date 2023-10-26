import { Cat } from "./types";
import { useCatStore } from "./store";
import { useFetchCats } from "./useFetchCats";
import CatCard from "./CatCard";

const ShowCats = () => {
  const { catFavorite } = useCatStore();
  const { data, error, isLoading } = useFetchCats();

  if (isLoading) return <div>Fetching posts...</div>;
  if (error) return <div>An error occurred: {error.toString()}</div>;

  return (
    <>
      <table>
        <tr>
          <th>
            <h2>Name</h2>
          </th>
          <th>
            <h2>Country</h2>
          </th>
          <th>
            <h2>Coat</h2>
          </th>
          <th>
            <h2>Pattern</h2>
          </th>
          <th>
            <h2>Favorite</h2>
          </th>
        </tr>
        {data?.map((cat: Cat) => (
          <CatCard
            key={cat.breed}
            cat={cat}
            isFavorite={catFavorite.includes(cat.breed)}
          />
        ))}
      </table>
    </>
  );
};

export default ShowCats;
