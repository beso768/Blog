import * as React from "react";
import {
  addPostServer,
  deletePostServer,
  getPosts,
} from "../services/httpService";
import { PostTypes } from "./actionTypes";

export interface Data {
  id?: number;
  title: string;
  body: string;
  imgUrl?: string;
}

type PostProviderProps = {
  children: React.ReactNode;
};
type PostState = {
  error: boolean | string;
  data: Data[] | [];
  loading: boolean;
};

type PostAction = {
  type: string;
  payload: Data[] | [];
};

const PostsContext = React.createContext<{
  posts: PostState;
  dispatch: React.Dispatch<PostAction>;
}>({
  posts: { error: false, data: [], loading: false },
  dispatch: () => undefined,
});

function postReducer(posts: PostState, action: PostAction): PostState {
  switch (action.type) {
    case PostTypes.LOADING_DATA: {
      return { error: false, data: [], loading: true };
    }
    case PostTypes.SUCCESSFULL_DATA: {
      return { error: false, data: action.payload, loading: false };
    }
    case PostTypes.ERROR_DATA: {
      return { error: true, data: [], loading: false };
    }
    case PostTypes.DELETE_POST: {
      return { error: false, data: action.payload, loading: false };
    }
    case PostTypes.ADD_POST: {
      return { error: false, data: action.payload, loading: false };
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
}
const initialState: PostState = { error: false, data: [], loading: false };

export function PostProvider({ children }: PostProviderProps) {
  const [posts, dispatch] = React.useReducer<
    React.Reducer<PostState, PostAction>
  >(postReducer, initialState);

  return (
    <PostsContext.Provider value={{ posts, dispatch }}>
      {children}
    </PostsContext.Provider>
  );
}

export function usePost() {
  const context = React.useContext(PostsContext);
  if (!context) {
    throw new Error(`useCount must be used within a CountProvider`);
  }
  const { posts, dispatch } = context;

  const initializeData = async () => {
    dispatch({ type: PostTypes.LOADING_DATA, payload: [] });
    try {
      const response = await getPosts();
      dispatch({ type: PostTypes.SUCCESSFULL_DATA, payload: response });
    } catch (error) {
      dispatch({ type: PostTypes.ERROR_DATA, payload: [] });
    }
  };

  // This function firstly deletes post localy for faster UI and then delete  from server
  const deletePost = async (id: number) => {
    try {
      await deletePostServer(id);
      const updatedPosts: Data[] = posts.data.filter((post) => post.id !== id);
      dispatch({ type: PostTypes.SUCCESSFULL_DATA, payload: updatedPosts });
    } catch (error) {
      dispatch({ type: PostTypes.ERROR_DATA, payload: [] });
    }
  };

  const editPost = async (newObj: Data) => {
    try {
      // updatePostServer(newObj);
      const updatedPosts: Data[] = posts.data.map((post) =>
        post.id === newObj.id ? (post = newObj) : post
      );
      dispatch({ type: PostTypes.SUCCESSFULL_DATA, payload: updatedPosts });
    } catch (error) {
      dispatch({ type: PostTypes.ERROR_DATA, payload: [] });
    }
  };

  const addPost = async (newObj: Data) => {
    try {
      newObj.id = Math.random();
      const updatedPosts: Data[] = [newObj, ...posts.data];
      dispatch({ type: PostTypes.SUCCESSFULL_DATA, payload: updatedPosts });
      addPostServer(newObj);
    } catch (error) {
      dispatch({ type: PostTypes.ERROR_DATA, payload: [] });
    }
  };

  return {
    posts,
    dispatch,
    initializeData,
    deletePost,
    editPost,
    addPost,
  };
}
