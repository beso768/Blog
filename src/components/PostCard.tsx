import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { deletePost } from "../state/actionCreators/postActions";
import { usePost } from "../state/hooks/usePost";
import { Data } from "../state/postReducer";

interface PostProps {
  data: Data;
  setModalShow: React.Dispatch<React.SetStateAction<any>>;
}

const Post = ({ data, setModalShow }: PostProps) => {
  const [posts, dispatch] = usePost();

  function handleDelete(id: number): void {
    deletePost(id, posts, dispatch);
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
              disabled={data.id! >= 101}
              onClick={() =>
                setModalShow({
                  show: true,
                  post: {
                    ...data,
                    imgUrl:
                      data.imgUrl ||
                      `https://picsum.photos/500/400?random=${data.id}`,
                  },
                  mode: "edit",
                })
              }
            >
              Edit
            </Button>
            <Button variant="danger" onClick={() => handleDelete(data.id!)}>
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Post;
