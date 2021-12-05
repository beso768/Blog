import * as React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import MainWrapper from "./components/MainWrapper";
import CenteredModal from "./components/Modal";
import Posts from "./components/Posts";
import { PostProvider } from "./state/context";
import { Data } from "./state/postReducer";
import ToastComponent from "./ToastComponent";

export interface ImodalShow {
  show: boolean;
  post: Data | null;
  mode: string;
}
const initialModalProps = {
  show: false,
  post: null,
  mode: "",
};

function App() {
  const [modalShow, setModalShow] =
    React.useState<ImodalShow>(initialModalProps);

  return (
    <Container>
      <Header setModalShow={setModalShow} />
      <hr />
      <PostProvider>
        <MainWrapper>
          <Posts setModalShow={setModalShow} />
        </MainWrapper>
        <CenteredModal modalShow={modalShow} setModalShow={setModalShow} />
        <ToastComponent />
      </PostProvider>
    </Container>
  );
}

export default App;
