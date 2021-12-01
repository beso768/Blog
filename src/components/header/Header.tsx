import React from "react";
import { Row, Button } from "react-bootstrap";

export default function Header() {
  return (
    <Row className="justify-content-between my-4">
      <h1 className="w-auto">Simple blog</h1>
      <Button className="col-3">+ Add new</Button>
    </Row>
  );
}
