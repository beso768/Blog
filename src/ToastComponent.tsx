import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { usePost } from "./state/hooks/usePost";

export default function ToastComponent() {
  const { posts } = usePost();
  const [toastShow, setToastShow] = React.useState(false);

  React.useEffect(() => {
    if (posts.error) {
      setToastShow(true);
    }
  }, [posts]);
  return (
    <ToastContainer className="p-3" position={"top-center"}>
      <Toast
        onClose={() => setToastShow(false)}
        show={toastShow}
        delay={3000}
        autohide
        bg="danger"
      >
        <Toast.Header>
          <strong className="me-auto">Error</strong>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        </Toast.Header>
        <Toast.Body>{posts.error}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
