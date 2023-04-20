import { BookCard } from "../components/BookCard";
import { useBooks } from "../main";
import "../App.css";

export const Favorites = () => {
  const { isLoading, allBooksList } = useBooks();

  const favoritesList = allBooksList.filter(({ favorites }) => favorites);

  return (
    <>
      <h2>Favorites</h2>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : !favoritesList.length ? (
        <h2>add some books to favorites!</h2>
      ) : (
        <ul>
          {favoritesList.map((book) => (
            <BookCard book={book} favorite />
          ))}
        </ul>
      )}
    </>
  );
};
