import React, { useState } from "react";
import InvalidField from "./InvalidField";
import SignUpAgreement from "./SignUpAgreement";

export default function SignUpForm() {
  // Input Handler Setup
  const [input, setInput] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  // Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      // send data
      alert("You are successfully subscribed!");
      setInput({
        fname: "",
        lname: "",
        email: "",
        password: "",
      });
    }
  };

  const formValidation = () => {
    const newErrors = {};
    let isValid = true;
    if (input.fname === "") {
      newErrors.fname = "First name can't be empty";
      isValid = false;
    }
    if (input.fname !== "" && !input.fname.match(/^[a-z ,.'-]+$/i)) {
      newErrors.fname = "First name can't contain special characters";
      isValid = false;
    }
    if (input.lname === "") {
      newErrors.lname = "Last name can't be empty";
      isValid = false;
    }
    if (input.lname !== "" && !input.lname.match(/^[a-z ,.'-]+$/i)) {
      newErrors.lname = "Last name can't contain special characters";
      isValid = false;
    }
    if (input.email === "") {
      newErrors.email = "Email Address can't be empty";
      isValid = false;
    }
    if (
      input.email !== "" &&
      !input.email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      newErrors.email = "Please provide a valid email";
      isValid = false;
    }
    if (input.password === "") {
      newErrors.password = "Password can't be empty";
      isValid = false;
    }
    if (input.password !== "" && input.password.length < 6) {
      newErrors.password = "Password can't be shorter than 6 characters";
      isValid = false;
    }
    setError(newErrors);
    return isValid;
  };

  return (
    <section className="sign-up">
      <form
        className="sign-up__form"
        id="sign-up__form"
        method="get"
        action=""
        onSubmit={handleSubmit}
      >
        {/* First Name Field */}
        <section className="sign-up__form-field">
          <input
            className={
              !error.fname
                ? "sign-up__form-input"
                : "sign-up__form-input input-field--error"
            }
            type="text"
            name="fname"
            placeholder="First Name"
            onChange={handleInput}
            value={input.fname}
          />
          <InvalidField error={!error.fname} errorText={error.fname} />
        </section>
        {/* Last Name Field */}
        <section className="sign-up__form-field">
          <input
            className={
              !error.lname
                ? "sign-up__form-input"
                : "sign-up__form-input input-field--error"
            }
            type="text"
            name="lname"
            placeholder="Last Name"
            onChange={handleInput}
            value={input.lname}
          />
          <InvalidField error={!error.lname} errorText={error.lname} />
        </section>
        {/* Email Field */}
        <section className="sign-up__form-field">
          <input
            className={
              !error.email
                ? "sign-up__form-input"
                : "sign-up__form-input input-field--error"
            }
            type="text"
            name="email"
            placeholder="Email Address"
            onChange={handleInput}
            value={input.email}
          />
          <InvalidField error={!error.email} errorText={error.email} />
        </section>
        {/* Password Field */}
        <section className="sign-up__form-field">
          <input
            className={
              !error.password
                ? "sign-up__form-input"
                : "sign-up__form-input input-field--error"
            }
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleInput}
            value={input.password}
          />
          <InvalidField error={!error.password} errorText={error.password} />
        </section>
        <button className="sign-up__button" type="submit" form="sign-up__form">
          CLAIM YOUR FREE TRIAL
        </button>
      </form>
      <SignUpAgreement />
    </section>
  );
}
