import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import { appName } from "./constants";

export default function Header() {
  return (
    <div>
      <Navbar className="bg-body-tertiary" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              //   src="/public/vite.svg"
              src="/public/frog-svgrepo-com.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            {appName}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}
