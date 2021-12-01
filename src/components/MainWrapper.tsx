import React, { useEffect } from "react";
import { Carousel, Row } from "react-bootstrap";
import { Data, usePost } from "../state/context";
import CenteredModal from "./Modal";
import Post from "./Post";

export default function MainWrapper() {
  const [modalShow, setModalShow] = React.useState<boolean>(false);
  const { posts, initializeData } = usePost();

  useEffect(() => {
    initializeData();
  }, []);

  return (
    <>
      <Carousel interval={null}>
        {posts.data.map((post: Data) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`https://picsum.photos/900/200?random=${post.id}`}
              alt="First slide"
            />
            <Carousel.Caption className="caption">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <Row>
        {posts.data.map((post) => (
          <Post data={post} key={post.id} setModalShow={setModalShow} />
        ))}
      </Row>
      <CenteredModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
