import { useBooks } from "../main";
import "../App.css";
import { NavLink } from "react-router-dom";

export const BookCard = ({ book, favorite, readPage }) => {
  const { allBooksList, handleRead, isBookInFav, handleFavorites } = useBooks();
  const { id, title, author, image, read } = book;
  return (
    <>
      <li key={id}>
        <img id="home_img" src={image}></img>
        <p>{id}</p>
        <p>Title: {title}</p>
        <p>Author: {author}</p>

        {!readPage && (
          <p>
            <button
              disabled={read}
              onClick={() => {
                handleRead(book);
                console.log(allBooksList);
              }}
            >
              {read ? "Already read" : "Mark as Read"}
            </button>
          </p>
        )}

        {!favorite && (
          <p>
            <button onClick={() => handleFavorites(book)}>
              {isBookInFav(book) ? (
                <NavLink to="/favorites">Go to Fav</NavLink>
              ) : (
                "Add to Fav"
              )}
            </button>
          </p>
        )}
      </li>
    </>
  );
};
