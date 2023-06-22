import { FC, ChangeEvent, FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Form,
  Label,
  Input,
  Select,
  Fieldset,
  InputName,
} from "./FilterCard.styled";
interface ISearchParams {
  count_card?: string;
  user_name?: string;
  status_follow?: string;
}

const FilterCard: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const status_follow = searchParams.get("status_follow") ?? "showAll";
  const count_card = searchParams.get("count_card") ?? "6";
  const user_name = searchParams.get("user_name") ?? "";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const newUserName = (
      form.elements.namedItem("userName") as HTMLInputElement
    ).value;

    const newSearchParams = {} as ISearchParams;
    if (count_card !== "6") newSearchParams.count_card = count_card;
    if (status_follow !== "showAll")
      newSearchParams.status_follow = status_follow;
    if (newUserName) newSearchParams.user_name = newUserName;
    setSearchParams({ ...newSearchParams });
  };
  // * onChangeStatus
  const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
    const newSearchParams = {} as ISearchParams;

    if (count_card !== "6") newSearchParams.count_card = count_card;
    if (user_name) newSearchParams.user_name = user_name;
    if (e.target.value !== "showAll")
      newSearchParams.status_follow = e.target.value;
    setSearchParams({ ...newSearchParams });
  };

  // * onChangeCountCards
  const onChangeCountCards = (e: ChangeEvent<HTMLSelectElement>) => {
    const newSearchParams = {} as ISearchParams;
    if (user_name) newSearchParams.user_name = user_name;
    if (status_follow !== "showAll")
      newSearchParams.status_follow = status_follow;
    if (e.target.value !== "6") newSearchParams.count_card = e.target.value;

    setSearchParams({ ...newSearchParams });
  };

  return (
    <Form name="byUsername" onSubmit={handleSubmit}>
      <Fieldset>
        <label htmlFor="filterUsername">Filter by name:</label>
        <InputName
          type="text"
          name="userName"
          id="filterUsername"
          defaultValue={user_name}
        />
      </Fieldset>

      <Fieldset>
        <label htmlFor="countCard">Upload cards to page:</label>
        <Select
          name="countCard"
          id="countCard"
          value={count_card}
          onChange={onChangeCountCards}
        >
          <option value="1">1</option>
          <option value="4">4</option>
          <option value="6">6</option>
          <option value="12">12</option>
          <option value="24">24</option>
        </Select>
      </Fieldset>

      <Fieldset>
        <p>Filter by status:</p>
        <Label htmlFor="showAll">
          <Input
            type="radio"
            name="statusFollow"
            value="showAll"
            id="showAll"
            checked={status_follow === "showAll"}
            onChange={onChangeStatus}
          />
          Show all
        </Label>
        <Label htmlFor="following">
          <Input
            type="radio"
            name="statusFollow"
            value="following"
            id="following"
            checked={status_follow === "following"}
            onChange={onChangeStatus}
          />
          Following
        </Label>
        <Label htmlFor="statusFollow">
          <Input
            type="radio"
            name="statusFollow"
            value="notFollowing"
            id="statusFollow"
            checked={status_follow === "notFollowing"}
            onChange={onChangeStatus}
          />
          Not Following
        </Label>
      </Fieldset>
    </Form>
  );
};
export default FilterCard;
