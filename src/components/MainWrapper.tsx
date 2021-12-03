import React, { useEffect } from "react";
import { usePost } from "../state/hooks/usePost";

export default function MainWrapper({ children }) {
  const { initializeData } = usePost();

  useEffect(() => {
    initializeData();
  }, []);

  return <>{children}</>;
}
