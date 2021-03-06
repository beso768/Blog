import * as React from "react";
import postReducer, { PostAction, PostState } from "./postReducer";

type PostProviderProps = {
  children: React.ReactNode;
};
type PostContextProps = [
  posts: PostState,
  dispatch: React.Dispatch<PostAction>
];

export const PostsContext = React.createContext<PostContextProps | null>(null);
PostsContext.displayName = "PostContext";

const initialState: PostState = { error: null, data: [], loading: false };

export function PostProvider({ children }: PostProviderProps) {
  const [posts, dispatch] = React.useReducer<
    React.Reducer<PostState, PostAction>
  >(postReducer, initialState);
  const value: PostContextProps = React.useMemo(
    () => [posts, dispatch],
    [posts, dispatch]
  );

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
}
