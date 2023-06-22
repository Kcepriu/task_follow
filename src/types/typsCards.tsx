export interface ICard {
  id: string;
  user: string;
  tweets: number;
  followers: number;
  avatar: string;
  follow: boolean;
}

export type TypeFollow = "showAll" | "following" | "notFollowing";
