import React, { Component, Fragment } from "react";
import Menu from "../../components/Nav/Navbar";
import Footer from "../../components/Footer/Footer";

import "./Contact.css";
import {
  Container,
  Row,
  Col,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
} from "reactstrap";
import Shlok from "../../assets/images/Shlok.jpg";

class Contact extends Component {
  render() {
    return (
      <Fragment>
        <div className="ContactForm">
          <Menu />
          <Container>
            <Row className="m-0 mt-5 mb-5">
              <Col lg={6} sm={12}>
                <img src={Shlok} alt="Shlok" className="ContactImage" />
                <div className="contact">
                    Fill this form or directly contact me !!<br />
                  <a href="tel:8307747802">+91-8307747802</a>
                  <br />
                  <a href="emailto:sngargrsd@gmail.com">sngargrsd@gmail.com</a>
                </div>
              </Col>
              <Col lg={6} sm={12}>
                <div className="ques">
                  Have a question or want to collaborate ??
                  <br />
                  Let me know !!
                </div>
                <form>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>Name</InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder="Name" />
                  </InputGroup>
                  <br />
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>Email Id</InputGroupText>
                    </InputGroupAddon>
                    <Input type="email" placeholder="Email" required />
                  </InputGroup>
                  <br />
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>Messgae Subject</InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder="Subject" />
                  </InputGroup>
                  <br />
                  <label>Message</label>
                  <br />
                  <textarea
                    rows="5"
                    cols="70"
                    placeholder="Give your message"
                    className="textArea"
                  />
                  <br />
                  <center>
                    <Button className="SubmitBtn" color="primary">
                      Submit
                    </Button>
                  </center>
                </form>
              </Col>
            </Row>
          </Container>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default Contact;