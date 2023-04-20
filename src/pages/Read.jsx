import { BookCard } from "../components/BookCard";
import { useBooks } from "../main";
import "../App.css";

export const Read = () => {
  const { isLoading, allBooksList } = useBooks();

  const readingList = allBooksList.filter(({ read }) => read);

  return (
    <>
      <h2>Read</h2>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : !readingList.length ? (
        <h2>no books read!</h2>
      ) : (
        <ul>
          {readingList.map((book) => (
            <BookCard book={book} readPage />
          ))}
        </ul>
      )}
    </>
  );
};
