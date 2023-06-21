import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import HeaderPage from "../../components/HeaderPage/HeaderPage";
import MainLoader from "../../components/MainLoader/MainLoader";
import { Container } from "./MainLayout.styled";

const MainLayout: FC = () => {
  return (
    <Container>
      <HeaderPage />

      <Suspense fallback={<MainLoader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MainLayout;
