import { NavLink } from "react-router-dom";
import "../App.css";
import { useBooks } from "../main";

export const Header = () => {
  const { allBooksList } = useBooks();

  const readListLength = allBooksList.filter(({ read }) => read).length;

  const favoritesLength = allBooksList.filter(
    ({ favorites }) => favorites
  ).length;

  return (
    <>
      <nav>
        <NavLink className="navlink" to="/">
          All Books
        </NavLink>
        <NavLink className="navlink" to="/favorites">
          favorites ({favoritesLength})
        </NavLink>
        <NavLink className="navlink" to="/read">
          Read ({readListLength})
        </NavLink>
        <NavLink className="navlink" to="/profile">
          profile
        </NavLink>
      </nav>
    </>
  );
};
