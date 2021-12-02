import React from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { usePost } from "../state/context";
import { ImodalShow } from "../App";
import { Data } from "../state/postReducer";

const initialState = {
  title: "",
  body: "",
  imgUrl: "",
};

interface CenteredModalProps {
  modalShow: ImodalShow;
  setModalShow: React.Dispatch<React.SetStateAction<ImodalShow>>;
}

export default function CenteredModal({
  modalShow,
  setModalShow,
}: CenteredModalProps) {
  const { addPost, editPost } = usePost();
  const [postObj, setPostObj] = React.useState<Data>(initialState);

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (modalShow.mode === "Add") {
      addPost(postObj);
    } else {
      editPost(postObj);
    }
    setModalShow({ ...modalShow, show: false });
    setPostObj(initialState);
  }

  const modalProps = {
    show: modalShow.show,
    onHide: () => setModalShow({ ...modalShow, show: false }),
  };

  React.useEffect(() => {
    if (modalShow.post) {
      setPostObj(modalShow.post);
    }
    return () => setPostObj(initialState);
  }, [modalShow]);
  return (
    <Modal
      {...modalProps}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {modalShow.mode} Post
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3" controlId="formTitle">
            <Form.Label column sm="2">
              title
            </Form.Label>
            <Col sm="10">
              <Form.Control
                required
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
                required
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
                required
                value={postObj.body}
                onChange={({ target }) =>
                  setPostObj({ ...postObj, body: target.value })
                }
              />
            </Col>
          </Form.Group>
          <hr />
          <Button variant="primary" type="submit">
            {modalShow.mode}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
