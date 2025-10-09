import React from "react";
// import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@mui/material";
import { Button } from "react-bootstrap";

const Signin = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("The email is invalid")
      .required("Email field is required"),
    password: yup
      .string()
      .min(4, "The minimum password length is 4 characters")
      .max(15, "The maximum password length is 15 characters")
      .matches(/[a-z]+/, "Must have at least one lowercase letter")
      .matches(/[A-Z]+/, "Must have at least one capital letter")
      .matches(/\d+/, "Must have at least one number")
      .required("The password field is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onFormSubmit = (data) => {
    console.log("the form submit");
    console.log(data);
  };

  return (
    <>
      <main className="form-signin w-100 m-auto mt-5">
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="my-2">
            <TextField
              id="outlined-multiline-flexible"
              multiline
              className="form-control"
              label="Email address"
              placeholder="Email address"
              helperText={
                errors.email && (
                  <p className="text-danger">{errors.email.message}</p>
                )
              }
              maxRows={4}
            />
          </div>
          <div className="my-2">
            <TextField
              id="outlined-multiline-flexible"
              multiline
              className="form-control"
              label="Password"
              placeholder="Password..."
              helperText={
                errors.password && (
                  <p className="text-danger">{errors.password?.message}</p>
                )
              }
              maxRows={4}
            />
          </div>

          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="checkDefault"
            />
            <label className="form-check-label" for="checkDefault">
              Remember me
            </label>
          </div>
          <Button variant="primary" className="w-100 py-2" size="medium" type="submit">
          Medium
        </Button>
        </form>
      </main>
    </>
  );
};

export default Signin;
