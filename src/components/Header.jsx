import { NavLink } from "react-router-dom";
import "../App.css";
import { useBooks } from "../main";

export const Header = () => {
  const { getReadList, getFavoritesList } = useBooks();

  return (
    <>
      <nav>
        <NavLink className="navlink" to="/">
          All Books
        </NavLink>
        <NavLink className="navlink" to="/favorites">
          favorites ({getFavoritesList.length})
        </NavLink>
        <NavLink className="navlink" to="/read">
          Read ({getReadList.length})
        </NavLink>
        <NavLink className="navlink" to="/profile">
          profile
        </NavLink>
      </nav>
    </>
  );
};
