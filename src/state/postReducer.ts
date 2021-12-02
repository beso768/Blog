import { PostTypes } from "./actionTypes/PostTypes";

interface IactionPayload {}

export interface Data {
  id?: number;
  title: string;
  body: string;
  imgUrl?: string;
}
export type PostState = {
  process: {
    status: string;
    message: string;
  };
  data: Data[] | [];
};

export type PostAction = {
  type: string;
  payload: { status?: string; data: Data[] | []; message?: string };
};

export default function postReducer(
  posts: PostState,
  action: PostAction
): PostState {
  switch (action.type) {
    case PostTypes.LOADING_DATA: {
      return { process: { status: "loading", message: "" }, data: [] };
    }
    case PostTypes.SUCCESSFULL_DATA: {
      return {
        process: { status: action.payload.status, message: "" },
        data: action.payload.data,
      };
    }
    case PostTypes.ERROR_DATA: {
      return {
        process: {
          status: action.payload.status,
          message: action.payload.message,
        },
        data: [],
      };
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
}
