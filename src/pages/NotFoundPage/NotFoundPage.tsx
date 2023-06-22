import { FC } from "react";
import { Title, WrapPage, Content, Img, LinkBack } from "./NotFoundPage.styled";
import travolta from "../../images/confused-john-travolta.gif";

const NotFoundPage: FC = () => {
  return (
    <WrapPage>
      <Title>404</Title>
      <Content>Not Found page</Content>
      <Img src={travolta} alt="Not found Travolta" />
      <LinkBack to="/" replace>
        {" "}
        Go home
      </LinkBack>
    </WrapPage>
  );
};

export default NotFoundPage;
