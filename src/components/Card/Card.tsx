import { FC } from "react";
import { WrapCard } from "./Card.styled";
import { ICard } from "../../types/typsCards";
import { Ellipse, Line } from "./Card.styled";
interface IProps {
  card: ICard;
}

const Card: FC<IProps> = ({ card }) => {
  return (
    <WrapCard>
      {card.user}
      <Line />
      <Ellipse />
    </WrapCard>
  );
};

export default Card;
