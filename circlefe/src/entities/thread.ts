import { UserEntity } from "./user";

export interface ThreadEntity {
  id: number;
  content: string;
  image: string;
  likesCount: number;
  repliesCount: number;
  user: UserEntity;
  createdAt: Date;
  updatedAt: Date;
}
