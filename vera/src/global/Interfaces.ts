import { MessageType } from "./Enums";

export interface IUser {
  username: string;
  password: string;
  uid?: string;
}

export interface IMessageListData {
  key: string;
  groupTitle: string;
  lastMessage?: string;
  time?: string;
  screenNav: any
}

export interface IUserData {
  userID: string;
  userImage: string;
  userName: string;
}

export interface IMessageData {
  message: string;
  sentBy: string;
  time: Date;
}

export interface IGroupData {
  groupTitle: string;
  groupID: string;
  memberIDs: string[];
}

export interface IEventMessage {
  text: string;
  user: string;
  size?: number;
}

export interface IEventLike {
  messageID: string;
  user: string;
}

export interface IMessageEvent {
  msgType: MessageType;
  data: IEventMessage;
  id: number;
}