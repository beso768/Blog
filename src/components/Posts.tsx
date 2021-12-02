import React from "react";
import { Row } from "react-bootstrap";
import { usePost } from "../state/context";
import Post from "./Post";

export default function Posts({ setModalShow }) {
  const { posts } = usePost();

  return (
    <Row>
      {posts.data.map((post) => (
        <Post data={post} key={post.id} setModalShow={setModalShow} />
      ))}
    </Row>
  );
}
