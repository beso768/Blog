import React from "react";
import { Modal, Form, Row, Col, Button } from "react-bootstrap";
import { usePost } from "../state/context";

const initialState = {
  title: "",
  body: "",
  imgUrl: "",
};
interface CenteredModalProps {
  show: boolean;
  onHide: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CenteredModal(props: CenteredModalProps) {
  const { addPost } = usePost();
  const [postObj, setPostObj] = React.useState(initialState);

  function handleSubmit() {
    addPost(postObj);
    props.onHide(false);
    setPostObj(initialState);
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formTitle">
            <Form.Label column sm="2">
              title
            </Form.Label>
            <Col sm="10">
              <Form.Control
                value={postObj.title}
                onChange={({ target }) =>
                  setPostObj({ ...postObj, title: target.value })
                }
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Image URL
            </Form.Label>
            <Col sm="10">
              <Form.Control
                value={postObj.imgUrl}
                onChange={({ target }) =>
                  setPostObj({ ...postObj, imgUrl: target.value })
                }
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              body
            </Form.Label>
            <Col sm="10">
              <Form.Control
                value={postObj.body}
                onChange={({ target }) =>
                  setPostObj({ ...postObj, body: target.value })
                }
              />
            </Col>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          Add Post
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
