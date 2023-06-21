import { FC } from "react";
import { nameRouters } from "../../constants/nameRouters";
import { List, Link, Item } from "./MainNav.styled";

const MainNav: FC = () => {
  return (
    <nav>
      <List>
        <Item>
          <Link to={nameRouters.home}>Home</Link>
        </Item>
        <Item>
          <Link to={nameRouters.tweets}>Tweets</Link>
        </Item>
      </List>
    </nav>
  );
};

export default MainNav;
