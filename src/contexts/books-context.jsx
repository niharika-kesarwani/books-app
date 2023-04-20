import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "../data/fakeFetch";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [allBooksList, setAllBooksList] = useState([]);
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getBooksData = async () => {
    try {
      setIsLoading(true);
      const {
        status,
        data: { books, user },
      } = await fakeFetch("https://example.com/api/books");
      setIsLoading(false);
      if (status === 200) {
        setAllBooksList(books);
        setUser(user);
      }
    } catch (err) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBooksData();
  }, []);

  const handleFavorites = (selectedBook) =>
    setAllBooksList((allBooksList) =>
      allBooksList.map((book) =>
        book.id === selectedBook.id ? { ...book, favorites: true } : book
      )
    );

  const isBookInFav = (book) =>
    allBooksList.find(({ id }) => id === book.id).favorites;

  const handleRead = (book) =>
    setAllBooksList((allBooksList) =>
      allBooksList.map((allBook) =>
        allBook.id === book.id ? { ...allBook, read: !allBook.read } : allBook
      )
    );

  return (
    <BooksContext.Provider
      value={{
        isLoading,
        allBooksList,
        handleFavorites,
        isBookInFav,
        handleRead,
        user,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export const useBooks = () => useContext(BooksContext);
