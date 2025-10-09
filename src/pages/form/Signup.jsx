import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";

const Signup = () => {
  const schema = yup.object().shape({
    name: yup.string().required("The name field is required"),
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
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        "The password and its repetition are not the same"
      )
      .required("Password confirmation is mandatory"),
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
          <h1 className="h3 mb-3 fw-normal">Please sign up</h1>

          <div className="my-2">
            <TextField
              id="outlined-multiline-flexible"
              multiline
              className="form-control"
              label="Name"
              placeholder="Name..."
              helperText={
                errors.name && (
                  <p className="text-danger">{errors.name?.message}</p>
                )
              }
              maxRows={4}
            />
          </div>
          <div className="">
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
          <div className="my-2">
            <TextField
              id="outlined-multiline-flexible"
              multiline
              className="form-control"
              label="confirmPassword"
              placeholder="Password..."
              helperText={
                errors.confirmPassword && (
                  <p className="text-danger">
                    {errors.confirmPassword?.message}
                  </p>
                )
              }
              maxRows={4}
            />
          </div>

          <div className="form-check text-start my-2">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="checkDefault"
            />
            <label className="form-check-label" for="checkDefault">
              Remember me
            </label>{" "}
          </div>
          <Button variant="contained" className="w-100 py-2" size="medium" type="submit">
          Medium
        </Button>
        </form>
      </main>
    </>
  );
};

export default Signup;
