import * as React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Header from "./components/header/Header";
import MainWrapper from "./components/MainWrapper";
import { PostProvider } from "./state/context";
import "./App.css";

function App() {
  return (
    <Container>
      <Header />
      <hr />
      <PostProvider>
        <MainWrapper />
      </PostProvider>
    </Container>
  );
}

export default App;
