import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { usePost } from "../state/context";

interface PostProps {
  data: { id: number; title: string; body: string; imgUrl?: string };
  setModalShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Post: React.FC<PostProps> = ({ data, setModalShow }) => {
  const { deletePost, editPost } = usePost();

  function handleDelete(id: number): void {
    deletePost(id);
  }

  return (
    <Col md="4" className="h-auto card-wrapper my-4">
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={data.imgUrl || `https://picsum.photos/500/400?random=${data.id}`}
        />
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.body}</Card.Text>
          <div className="buttons">
            <Button
              variant="primary"
              className="me-2"
              onClick={() => setModalShow(true)}
            >
              Edit
            </Button>
            <Button variant="danger" onClick={() => handleDelete(data.id)}>
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Post;
