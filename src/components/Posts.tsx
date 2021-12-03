import React from "react";
import { Row } from "react-bootstrap";
import { usePost } from "../state/hooks/usePost";
import { Data } from "../state/postReducer";
import PostCard from "./PostCard";

export default function Posts({ setModalShow }) {
  const [posts] = usePost();

  return (
    <Row>
      {posts.data.map((post: Data) => (
        <PostCard data={post} key={post.id} setModalShow={setModalShow} />
      ))}
    </Row>
  );
}
