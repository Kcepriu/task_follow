import { FC } from "react";
import { NavLink } from "react-router-dom";
import { nameRouters } from "../../constants/nameRouters";

const MainNav: FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={nameRouters.home}>Home</NavLink>
        </li>
        <li>
          <NavLink to={nameRouters.tweets}>Tweets</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
