import { PostTypes } from "./actionTypes/PostTypes";

export interface Data {
  id?: number;
  title: string;
  body: string;
  imgUrl?: string;
}
export type PostState = {
  error: null | string;
  data: Data[] | [];
  loading: boolean;
};

export type PostAction = {
  type: string;
  payload?: any;
};

export default function postReducer(
  posts: PostState,
  action: PostAction
): PostState {
  switch (action.type) {
    case PostTypes.LOADING_DATA: {
      return { error: null, data: [], loading: true };
    }
    case PostTypes.SUCCESSFULL_DATA: {
      return { error: null, data: action.payload, loading: false };
    }
    case PostTypes.ERROR_DATA: {
      return { error: action.payload, data: [], loading: false };
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
}
