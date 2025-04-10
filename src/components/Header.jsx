import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import { appName } from "../constants";
import TopicSelector from "./TopicSelector";
import frogLogo from "../assets/frog2.svg";

export default function Header() {
  return (
    <div>
      <Navbar className="bg-body-tertiary" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="logo"
              src={frogLogo}
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
