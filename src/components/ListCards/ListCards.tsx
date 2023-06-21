import { FC } from "react";
import { ICard } from "../../types/typsCards";
import Card from "../Card/Card";
import { List, Item } from "./ListCards.styled";

interface IProps {
  cards: ICard[];
}

const ListCards: FC<IProps> = ({ cards }) => {
  return (
    <List>
      {cards.map((card) => (
        <Item key={card.id}>
          <Card card={card} />
        </Item>
      ))}
    </List>
  );
};

export default ListCards;
