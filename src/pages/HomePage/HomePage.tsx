import { FC } from "react";
import { Title, Content, WrapPage, Link } from "./HomePage.styled";
import { nameRouters } from "../../constants/nameRouters";

const HomePage: FC = () => {
  return (
    <WrapPage>
      <Title>Welcome to the Tweets world</Title>
      <Content>
        Welcome to our application, where you can connect with friends and
        follow their activities. Stay updated on all the important events
        happening within your circle of friends, ensuring you never miss out on
        any of them. Explore our vibrant community, dive into exciting
        conversations, and discover new experiences.{" "}
        <Link to={nameRouters.tweets}>Join us</Link> now and embrace the
        coolness of our platform. Go ahead, check out the Tweets, and see for
        yourself how awesome it is!
      </Content>
    </WrapPage>
  );
};

export default HomePage;
