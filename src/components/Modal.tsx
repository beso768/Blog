import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { ImodalShow } from "../App";
import { usePost } from "../state/hooks/usePost";
import { Data } from "../state/postReducer";
import ModalFormField from "./ModalFormField";

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
  const bootstrapModalProps = {
    show: modalShow.show,
    onHide: () => setModalShow({ ...modalShow, show: false }),
  };

  React.useEffect(() => {
    if (modalShow.post) {
      setPostObj(modalShow.post);
    }
    return () => setPostObj(initialState);
  }, [modalShow]);

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

  return (
    <Modal
      {...bootstrapModalProps}
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
          {Object.keys(initialState).map((item) => (
            <ModalFormField
              postObj={postObj}
              item={item}
              setPostObj={setPostObj}
              key={item}
            />
          ))}
          <hr />
          <Button variant="primary" type="submit">
            {modalShow.mode}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
