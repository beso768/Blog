import React from "react";
import { Button, Row } from "react-bootstrap";

export default function Header({ setModalShow }) {
  return (
    <Row className="justify-content-between my-4">
      <h1 className="w-auto">Simple blog</h1>
      <Button
        className="col-3 addButton mx-2"
        onClick={() => setModalShow({ show: true, mode: "Add", post: null })}
      >
        + Add new
      </Button>
    </Row>
  );
}
