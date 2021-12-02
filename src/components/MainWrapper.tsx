import React, { useEffect } from "react";
import { usePost } from "../state/context";

export default function MainWrapper({ children }) {
  const { initializeData } = usePost();

  useEffect(() => {
    initializeData();
  }, []);

  return <>{children}</>;
}

// <Carousel interval={null}>
//   {posts.data.map((post: Data) => (
//     <Carousel.Item>
//       <img
//         className="d-block w-100"
//         src={`https://picsum.photos/900/200?random=${post.id}`}
//         alt="First slide"
//       />
//       <Carousel.Caption className="caption">
//         <h3>{post.title}</h3>
//         <p>{post.body}</p>
//       </Carousel.Caption>
//     </Carousel.Item>
//   ))}
// </Carousel>;
