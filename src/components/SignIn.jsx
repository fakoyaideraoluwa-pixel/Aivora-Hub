import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import "./Sign.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const validationSchema = Yup.object({
    name: Yup.string()
      .trim()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),

    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm your password"),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(
      (user) =>
        user.email.trim().toLowerCase() ===
        values.email.trim().toLowerCase()
    );

    if (existingUser) {
      setMessage("Email already exists!");
      return;
    }

    const newUser = {
      name: values.name.trim().toUpperCase(),
      email: values.email.trim().toLowerCase(),
      password: values.password,
      wallet: 0,
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    setMessage("Account created successfully!");

    resetForm();

    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <>
      <button
        onClick={() => navigate("/")}
        className="btn btn-dark m-3"
      >
        Back
      </button>

      <div className="signin-page">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="form">
            <h2>Create Account</h2>

            {message && (
              <p className="message">{message}</p>
            )}

            <div className="input-group">
              <Field
                type="text"
                name="name"
                placeholder="Enter your name"
              />
              <ErrorMessage
                name="name"
                component="small"
                className="error"
              />
            </div>

            <div className="input-group">
              <Field
                type="email"
                name="email"
                placeholder="Enter your email"
              />
              <ErrorMessage
                name="email"
                component="small"
                className="error"
              />
            </div>

            <div className="input-group">
              <Field
                type="password"
                name="password"
                placeholder="Enter your password"
              />
              <ErrorMessage
                name="password"
                component="small"
                className="error"
              />
            </div>

            <div className="input-group">
              <Field
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
              />
              <ErrorMessage
                name="confirmPassword"
                component="small"
                className="error"
              />
            </div>

            <button type="submit">
              Sign Up
            </button>

            <p className="mt-3 text-center">
              Already have an account?{" "}
              <Link to="/login">Login</Link>
            </p>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default SignUp;