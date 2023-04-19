import React from "react";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
import "../style/Register.css";
export const Login = () => {
  //form handler
  const onfinishHandler = (values) => {
    console.log(values);
  };
  return (
    <>
      <div className="form-container">
        <Form layout="vertical" onFinish={onfinishHandler} className="card p-4">
          <h1>Login Form</h1>

          <Form.Item label="Email" name={"email"}>
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name={"password"}>
            <Input type="password" required />
          </Form.Item>

          <button className="btn btn-primary" type="submit">
            Login
          </button>
          <Link to="/register" className="ms-2">
            Not a user Register here
          </Link>
        </Form>
      </div>
    </>
  );
};
