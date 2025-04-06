import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import { appName } from "../constants";
import TopicSelector from "./TopicSelector";

export default function Header() {
  return (
    <div>
      <Navbar className="bg-body-tertiary" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/src/assets/frog2.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            {appName}
          </Navbar.Brand>
          <TopicSelector></TopicSelector>
        </Container>
      </Navbar>
    </div>
  );
}
