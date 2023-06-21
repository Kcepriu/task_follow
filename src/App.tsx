import { FC, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import { nameRouters } from "./constants/nameRouters";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const TweetsPage = lazy(() => import("./pages/TweetsPage/TweetsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path={nameRouters.home} element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path={nameRouters.tweets} element={<TweetsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;

// https://6492a325428c3d2035d0671b.mockapi.io/api/v1/follow
