import * as React from "react";

const PostsContext = React.createContext<{
  state: any;
  dispatch: React.Dispatch<any>;
}>({
  state: [],
  dispatch: () => undefined,
});

function postReducer(state: { count: number }, action: { type: any }) {
  switch (action.type) {
    case "INCREMENT": {
      return { count: state.count + 1 };
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
}

function PostProvider(props: any) {
  const [state, dispatch] = React.useReducer(postReducer, []);
  const value = React.useMemo(() => [state, dispatch], [state]);
  return <PostsContext.Provider value={value} {...props} />;
}

function usePost() {
  const context = React.useContext(PostsContext);
  if (!context) {
    throw new Error(`useCount must be used within a CountProvider`);
  }
  const [state, dispatch] = context;

  const increment = () => dispatch({ type: "INCREMENT" });
  return {
    state,
    dispatch,
    increment,
  };
}
