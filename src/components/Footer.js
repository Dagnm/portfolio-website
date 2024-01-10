import { Container, Col, Row } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-center">
          <MailchimpForm />
          <Col sm={6}>
            <image src={logo} alt="logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a>
                <imgs src={navIcon1} />
              </a>
              <a>
                <imgs src={navIcon2} />
              </a>
              <a>
                <imgs src={navIcon3} />
              </a>
            </div>
            <p> CopyRight 2023. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
