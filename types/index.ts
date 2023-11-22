export interface Comment {
  id: string;
  ownerId: string;
  ownerName: string;
  text: string
  likes: number;
}

export interface User {
  id: string;
  name: string;
}

export interface createCommentDto {
  ownerId: string;
  ownerName: string;
  text: string;
}