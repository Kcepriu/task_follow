import { FC } from "react";
import { ICard } from "../../types/typsCards";
import Card from "../Card/Card";
import { List, Item } from "./ListCards.styled";

interface IProps {
  cards: ICard[];
  handleFollow: (id: string) => void;
}

const ListCards: FC<IProps> = ({ cards, handleFollow }) => {
  return (
    <List>
      {cards.map((card) => (
        <Item key={card.id}>
          <Card card={card} handleFollow={handleFollow} />
        </Item>
      ))}
    </List>
  );
};

export default ListCards;
