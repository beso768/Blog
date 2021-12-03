import React from "react";
import { Form, Row, Col } from "react-bootstrap";

export default function ModalFormField({ postObj, setPostObj, item }) {
  return (
    <Form.Group as={Row} className="mb-3" controlId="formTitle">
      <Form.Label column sm="2">
        {item}
      </Form.Label>
      <Col sm="10">
        <Form.Control
          required
          value={postObj[item]}
          onChange={({ target }) =>
            setPostObj({ ...postObj, [item]: target.value })
          }
        />
      </Col>
    </Form.Group>
  );
}
