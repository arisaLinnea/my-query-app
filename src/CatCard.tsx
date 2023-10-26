import { useCatStore } from "./store";
import { CardProps } from "./types";

const CatCard = ({ cat, isFavorite }: CardProps) => {
  const { addFavorite, removeFavorite } = useCatStore();

  function toggleFavorite() {
    if (isFavorite) {
      removeFavorite(cat);
    } else {
      addFavorite(cat);
    }
  }
  return (
    <tr>
      <td>
        <h3>{cat.breed}</h3>
      </td>
      <td>{cat.country}</td>
      <td>{cat.coat}</td>
      <td>{cat.pattern}</td>
      <td>
        <button onClick={toggleFavorite}>
          {isFavorite ? "dislike" : "like"}
        </button>
      </td>
    </tr>
  );
};

export default CatCard;
