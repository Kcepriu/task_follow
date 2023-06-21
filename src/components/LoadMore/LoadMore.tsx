import { FC, Dispatch, SetStateAction } from "react";
import { WrapLoadMore, Button } from "./LoadMore.styled";

interface IProps {
  setCurentPage: Dispatch<SetStateAction<number>>;
}

const LoadMore: FC<IProps> = ({ setCurentPage }) => {
  const handleLoadMore = () => {
    setCurentPage((prev) => prev + 1);
  };

  return (
    <WrapLoadMore>
      <Button type="button" onClick={handleLoadMore}>
        Load more
      </Button>
    </WrapLoadMore>
  );
};

export default LoadMore;
