import { FC, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import { nameRouters } from "./constants/nameRouters";
const Home = lazy(() => import("./pages/Home/Home"));
const Tweets = lazy(() => import("./pages/Tweets/Tweets"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path={nameRouters.home} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={nameRouters.tweets} element={<Tweets />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
