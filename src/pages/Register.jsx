import React from "react";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
import "../style/Register.css";
export const RegistrationPage = () => {
  //form handler
  const onfinishHandler = (values) => {
    console.log(values);
  };
  return (
    <>
      <div className="form-container">
        <Form layout="vertical" onFinish={onfinishHandler} className="card p-4">
          <h1>Registration Form</h1>
          <Form.Item label="Name" name={"name"}>
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name={"email"}>
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name={"password"}>
            <Input type="password" required />
          </Form.Item>
          <Form.Item label="Phone no." name={"PhoneNumber"}>
            <Input type="Number" required />
          </Form.Item>

          <button className="btn btn-primary" type="submit">
            Register
          </button>
          <Link to="/login" className="ms-2">
            Already login user
          </Link>
        </Form>
      </div>
    </>
  );
};
