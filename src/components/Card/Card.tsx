import { FC } from "react";
import { WrapCard } from "./Card.styled";
import { ICard } from "../../types/typsCards";
import { numericFormatter } from "react-number-format";
import { useSearchParams } from "react-router-dom";
import {
  Ellipse,
  Line,
  WrapContent,
  Title,
  Button,
  Avatar,
} from "./Card.styled";
import no_avatar from "../../images/no_avatar.png";
interface IProps {
  card: ICard;
  handleFollow: (id: string, deletedAfterChange: boolean) => void;
}

const Card: FC<IProps> = ({ card, handleFollow }) => {
  const [searchParams] = useSearchParams();
  const status_follow = searchParams.get("status_follow") ?? "showAll";

  return (
    <WrapCard>
      <Line />

      <Avatar
        src={card.avatar === "" ? no_avatar : card.avatar}
        alt={card.user}
        width="64"
        height="64"
      />
      <Ellipse />
      <WrapContent>
        {/* <Title>{card.user}</Title> */}
        <Title>
          {numericFormatter(String(card.tweets), {
            allowLeadingZeros: true,
            thousandSeparator: ",",
          })}
          <span>tweets</span>
        </Title>
        <Title>
          {numericFormatter(String(card.followers), {
            allowLeadingZeros: true,
            thousandSeparator: ",",
          })}
          <span>followers</span>
        </Title>
      </WrapContent>
      <Button
        // TODO
        type="button"
        className={card.follow ? "follow" : ""}
        onClick={() => handleFollow(card.id, status_follow !== "showAll")}
      >
        {card.follow ? "Following" : "Follow"}
      </Button>
    </WrapCard>
  );
};

export default Card;
