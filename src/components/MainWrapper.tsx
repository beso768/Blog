import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { initializeData } from "../state/actionCreators/postActions";
import { usePost } from "../state/hooks/usePost";

export default function MainWrapper({ children }) {
  const [posts, dispatch] = usePost();

  useEffect(() => {
    initializeData(dispatch);
  }, [dispatch]);

  return <>{posts.loading ? <Spinner animation="grow" /> : children}</>;
}
