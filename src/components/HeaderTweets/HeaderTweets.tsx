import { FC } from "react";
import { useLocation } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";

import { nameRouters } from "../../constants/nameRouters";
import FilterCard from "../FilterCard/FilterCard";

import { WrapHeaderTweets, LinkBack, WrapFilter } from "./HeaderTweets.styled";

const HeaderTweets: FC = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? nameRouters.home;

  return (
    <WrapHeaderTweets>
      <LinkBack to={backLinkHref}>
        <HiArrowLeft size="24" />
        Go back
      </LinkBack>
      <WrapFilter>
        <FilterCard />
      </WrapFilter>
    </WrapHeaderTweets>
  );
};

export default HeaderTweets;
