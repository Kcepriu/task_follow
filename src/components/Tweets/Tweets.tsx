import { FC } from "react";
import HeaderTweets from "../HeaderTweets/HeaderTweets";
import Loader from "../Loader/Loader";
import ListCards from "../ListCards/ListCards";
import useCards from "../../hooks/useCards";
import { WrapTwets } from "./Tweets.styled";
import LoadMore from "../LoadMore/LoadMore";

const Tweets: FC = () => {
  const { cards, showLoad, showLoadMore, setCurentPage } = useCards();

  return (
    <WrapTwets>
      <HeaderTweets />
      {cards.length > 0 && <ListCards cards={cards} />}
      {showLoadMore && <LoadMore setCurentPage={setCurentPage} />}

      {showLoad && <Loader />}
    </WrapTwets>
  );
};

export default Tweets;
