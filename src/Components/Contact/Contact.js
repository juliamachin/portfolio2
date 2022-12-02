import "./Contact.css";
import { useRef } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const Contact = () => {

  return (
    <div className="form-container">
      {/* <h2 className="title">Contact Me</h2> */}
      <Form className="form">
        <FormGroup>
          <Label>Name:</Label>
          <br />
          <Input
            placeholder="name"
            name="name"
            className="name"
            type="text"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Email:</Label>
          <br />
          <Input placeholder="email" className="email" type="email" required />
        </FormGroup>
        <FormGroup>
          <Label>Subject:</Label>
          <br />
          <Input
            placeholder="subject"
            type="text"
            className="subject"
            name="subject"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Message Content:</Label>
          <br />
          <Input
            placeholder="message content"
            className="content"
            type="textarea"
            required
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default Contact;
