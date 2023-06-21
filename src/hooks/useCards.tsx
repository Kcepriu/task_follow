import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { ICard } from "../types/typsCards";
import { getCards } from "../services/apiBackend";
import { showErrorMessage } from "../helpers/message";

interface IResult {
  cards: ICard[];
  showLoad: boolean;
  showLoadMore: boolean;
  setCurentPage: Dispatch<SetStateAction<number>>;
  setCountCardOnPage: Dispatch<SetStateAction<number>>;
  setFilterUser: Dispatch<SetStateAction<string>>;
}
const useCards = (): IResult => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [showLoad, setShowLoad] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [curentPage, setCurentPage] = useState(1);
  const [countCardOnPage, setCountCardOnPage] = useState(6);
  const [filterUser, setFilterUser] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      setShowLoad(true);
      setShowLoadMore(false);
      try {
        const listCards = await getCards(controller, {
          countCardOnPage,
          curentPage,
          filterUser,
        });
        setCards((prev) => [...prev, ...listCards]);

        console.log(listCards.length, countCardOnPage);
        if (listCards.length === countCardOnPage) {
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
  }, [curentPage, countCardOnPage, filterUser]);

  return {
    cards,
    showLoad,
    showLoadMore,
    setCurentPage,
    setCountCardOnPage,
    setFilterUser,
  };
};

export default useCards;
