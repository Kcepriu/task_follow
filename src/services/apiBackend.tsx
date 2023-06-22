import axios from "axios";
import { URL_API } from "../constants/api";
import { ICard } from "../types/typsCards";

interface IParams {
  limit: number;
  page: number;
  user: string;
  statusFollow: string;
}
interface IRequestParams {
  limit: number;
  page: number;
  user?: string;
  follow?: boolean;
}
const getAxiosParams = (params: IParams) => {
  const { limit, page, user, statusFollow } = params;

  const result = { limit, page } as IRequestParams;

  if (user) result.user = user;

  if (statusFollow === "showAll") return result;

  const follow = statusFollow === "following";
  result.follow = follow;

  return result;
};

export const getCards = async (
  controller: AbortController,
  params: IParams
): Promise<ICard[]> => {
  console.log(getAxiosParams(params));
  const responsData = await axios.get("/follow", {
    baseURL: URL_API,
    signal: controller.signal,
    params: getAxiosParams(params),
  });

  const { status, data } = responsData;

  if (status !== 200) return [];

  return data;
};

export const getCardsById = async (id: string): Promise<ICard | null> => {
  const responsData = await axios.get(`/follow/${id}`, {
    baseURL: URL_API,
  });

  const { status, data } = responsData;

  if (status !== 200) return null;

  return data;
};

export const updateCard = async (card: ICard): Promise<ICard | null> => {
  const { id, ...curentCard } = card;

  const responsData = await axios.put(`/follow/${id}`, curentCard, {
    baseURL: URL_API,
  });

  const { status, data } = responsData;

  if (status !== 200) return null;

  return data;
};

export const toogleFollow = async (id: string) => {
  const curentCard = await getCardsById(id);

  if (!curentCard) return;

  curentCard.followers = (curentCard.follow ? -1 : 1) + curentCard.followers;
  curentCard.follow = !curentCard.follow;

  const updatedCard = await updateCard(curentCard);

  return updatedCard;
};
