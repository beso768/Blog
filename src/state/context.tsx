import * as React from "react";
import postReducer, { PostAction, PostState } from "./postReducer";

type PostProviderProps = {
  children: React.ReactNode;
};

export const PostsContext = React.createContext<{
  posts: PostState;
  dispatch: React.Dispatch<PostAction>;
}>({
  posts: { error: null, data: [], loading: false },
  dispatch: () => undefined,
});

const initialState: PostState = { error: null, data: [], loading: false };

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
