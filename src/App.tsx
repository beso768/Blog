import * as React from "react";
import { Container, Toast } from "react-bootstrap";
import "./App.css";
import Header from "./components/header/Header";
import MainWrapper from "./components/MainWrapper";
import { PostProvider } from "./state/context";
import "./App.css";
import Posts from "./components/Posts";
import CenteredModal from "./components/Modal";
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
      <Header modalShow={modalShow} setModalShow={setModalShow} />
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
