import axios from "axios";
import { URL_API } from "../constants/api";
import { ICard } from "../types/typsCards";

export const getCards = async (
  controller: AbortController
): Promise<ICard[]> => {
  const responsData = await axios.get("/follow", {
    baseURL: URL_API,
    signal: controller.signal,
  });

  const { status, data } = responsData;

  if (status !== 200) return [];

  return data;
};
