import React from "react";
import { PostsContext } from "../context";

export function usePost() {
  const context = React.useContext(PostsContext);
  if (!context) {
    throw new Error(`useCount must be used within a CountProvider`);
  }
  // const { posts, dispatch } = context;

  return context;
}
