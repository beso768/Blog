import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { usePost } from "./state/context";
export default function ToastComponent() {
  const { posts } = usePost();
  const [toastShow, setToastShow] = React.useState(false);
  const [status, setStatus] = React.useState<{
    error: boolean;
    text: any;
  }>({
    error: false,
    text: "Successfully Submited!",
  });

  React.useEffect(() => {
    if (posts.error) {
      setStatus({ error: true, text: posts.error });
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
        bg={status.error ? "danger" : "success"}
      >
        <Toast.Header>
          <strong className="me-auto">Bootstrap</strong>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        </Toast.Header>
        <Toast.Body>{status.text}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
