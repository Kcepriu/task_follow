import { FC, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import HeaderTweets from "../HeaderTweets/HeaderTweets";
import ListCards from "../ListCards/ListCards";
import LoadMore from "../LoadMore/LoadMore";
import MainLoader from "../MainLoader/MainLoader";
import { ICard } from "../../types/typsCards";
import { getCards, toogleFollow } from "../../services/apiBackend";
import { WrapTwets } from "./Tweets.styled";
import { showErrorMessage } from "../../helpers/message";

const Tweets: FC = () => {
  const [searchParams] = useSearchParams();
  const [cards, setCards] = useState<ICard[]>([]);
  const [showLoad, setShowLoad] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [curentPage, setCurentPage] = useState(1);
  //
  const status_follow = searchParams.get("status_follow") ?? "showAll";
  const count_card = searchParams.get("count_card") ?? "3";
  const user_name = searchParams.get("user_name") ?? "";

  const handleFollow = async (id: string, deletedAfterChange: boolean) => {
    setShowLoad(true);
    try {
      const updatedCard = await toogleFollow(id);
      if (!updatedCard) return;
      if (deletedAfterChange) {
        setCards((prev) => prev.filter((card) => card.id !== updatedCard.id));
      } else {
        setCards((prev) => {
          const index = prev.findIndex((card) => card.id === updatedCard.id);
          if (index !== -1) prev.splice(index, 1, updatedCard);
          return [...prev];
        });
      }
    } catch {
      showErrorMessage("Error update card");
    } finally {
      setShowLoad(false);
    }
  };
  useEffect(() => {
    setCurentPage(1);
    setCards([]);
  }, [count_card, user_name, status_follow]);

  useEffect(() => {
    const controller = new AbortController();
    const load = async () => {
      setShowLoad(true);
      setShowLoadMore(false);
      try {
        const listCards = await getCards(controller, {
          page: curentPage,
          limit: Number(count_card),
          user: user_name,
          statusFollow: status_follow,
        });
        setCards((prev) => [...prev, ...listCards]);

        if (listCards.length === Number(count_card)) {
          setShowLoadMore(true);
        }
      } catch (error) {
        setCards([]);
        if (!(error instanceof Error)) return;
        if (error.name !== "CanceledError") {
          console.log("Error fetch", error);
          showErrorMessage("Error fetch shops");
        }
      } finally {
        setShowLoad(false);
      }
    };

    load();

    return () => {
      controller.abort();
    };
  }, [curentPage, count_card, user_name, status_follow]);

  return (
    <WrapTwets>
      <HeaderTweets />
      {cards.length > 0 && (
        <ListCards cards={cards} handleFollow={handleFollow} />
      )}
      {showLoadMore && <LoadMore setCurentPage={setCurentPage} />}

      {showLoad && <MainLoader />}
    </WrapTwets>
  );
};

export default Tweets;
