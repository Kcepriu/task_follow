import axios from "axios";
import { URL_API } from "../constants/api";
import { ICard } from "../types/typsCards";

interface IParams {
  countCardOnPage: number;
  curentPage: number;
  filterUser: string;
}

const getAxiosParams = (params: IParams) => {
  const { countCardOnPage: limit, curentPage: page, filterUser: user } = params;
  const result = { limit, page, user };
  return result;
};

export const getCards = async (
  controller: AbortController,
  params: IParams
): Promise<ICard[]> => {
  const responsData = await axios.get("/follow", {
    baseURL: URL_API,
    signal: controller.signal,
    params: getAxiosParams(params),
  });

  const { status, data } = responsData;

  if (status !== 200) return [];

  return data;
};
