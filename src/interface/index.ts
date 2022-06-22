import { Request } from "express";

export interface IuserEpice {
  id: number;
  name: string;
  curso: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUSerRequest extends Request {
  body: {
    PayLoad: string[]
  };
  params: {
    token: string;
    channel: string;
  };
}

export interface IProps {
  token: string;
  channel: string;
}