import { FC } from "react";
import MainNav from "../MainNav/MainNav";
import { Header } from "./HeaderPage.styled";

const HeaderPage: FC = () => {
  return (
    <Header>
      <MainNav />
    </Header>
  );
};

export default HeaderPage;
