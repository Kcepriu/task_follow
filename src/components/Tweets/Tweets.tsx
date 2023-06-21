import { FC, useEffect, useState } from "react";
import HeaderTweets from "../HeaderTweets/HeaderTweets";
import { ICard } from "../../types/typsCards";
import { getCards } from "../../services/apiBackend";
import { showErrorMessage } from "../../helpers/message";
import Loader from "../Loader/Loader";

const Tweets: FC = () => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [showLoad, setShowLoad] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      setShowLoad(true);
      try {
        const listCards = await getCards(controller);
        setCards(listCards);
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
  }, []);

  return (
    <>
      <HeaderTweets />
      <p>Cards</p>
      {cards.length > 0 &&
        cards.map((card) => {
          return <p key={card.id}> {card.user}</p>;
        })}
      <p>Load more</p>

      {showLoad && <Loader />}
    </>
  );
};

export default Tweets;
