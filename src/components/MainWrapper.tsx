import React, { useEffect } from "react";
import { initializeData } from "../state/actionCreators/postActions";
import { usePost } from "../state/hooks/usePost";

export default function MainWrapper({ children }) {
  const [, dispatch] = usePost();

  useEffect(() => {
    initializeData(dispatch);
  }, []);

  return <>{children}</>;
}
