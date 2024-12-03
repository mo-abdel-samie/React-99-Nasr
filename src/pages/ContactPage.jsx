import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { Button, Form } from "react-bootstrap";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
  });
  // const [userName, setUserName] = useState("");
  // const [userEmail, setUserEmail] = useState("");
  // const [userPassword, setUserPassword] = useState("");

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormData((pre) => {
      return { ...pre, [name]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);



    // console.log(userName, userEmail, userPassword);
    // setUserName("");
    // setUserEmail("");
    // setUserPassword("");
  };

  return (
    <MainLayout>
      <Form className="mx-4">
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <input
            onKeyUp={(e) => onChangeHandler(e)}
            type="text"
            name="userName"
            placeholder="name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onKeyUp={(e) => onChangeHandler(e)}
            // value={formData.userEmail}
            type="email"
            name="userEmail"
            placeholder="name@example.com"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onKeyUp={(e) => onChangeHandler(e)}
            // value={formData.userPassword}
            type="password"
            name="userPassword"
            placeholder="*************"
          />
        </Form.Group>

        <Button onClick={(e) => submitHandler(e)} variant="primary">
          Register
        </Button>
      </Form>
    </MainLayout>
  );
}
