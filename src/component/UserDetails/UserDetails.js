import { Alert } from "bootstrap";
import React, { useEffect, useState } from "react";
import "./UserDetails.css";

function UserDetails() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    birthDate: "",
  });

  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState({
    firstNameError: "",
    middleNameError: "",
    lastNameError: "",
    birthDateError: "",
  });

  const submitForm = (e) => {
    e.preventDefault();

    if (formValidation()) {
      setError({
        firstNameError: "",
        middleNameError: "",
        lastNameError: "",
        birthDateError: "",
      });
      console.log("Errors : " + JSON.stringify(error));
      alert("form submitted successfully");
    } else {
      setError({ ...error, valid: true });
      console.log("No errors found : " + JSON.stringify(error));
      console.log("Form Data: " + JSON.stringify(formValues));
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const formValidation = () => {
    var birth = new Date(formValues.birthDate);
    var now = new Date();
    let formIsValid = true;

    if (formValues.firstName && formValues.firstName.length < 5) {
      setError((error.firstNameError = "First Name is to short."));
      formIsValid = false;
    } else if (!formValues.firstName) {
      setError((error.firstNameError = "First Name required."));
      formIsValid = false;
    }

    if (formValues.middleName && formValues.middleName.length < 5) {
      setError((error.middleNameError = "Middle Name is to short."));
      formIsValid = false;
    } else if (!formValues.middleName) {
      setError((error.middleNameError = "Middle Name required."));
      formIsValid = false;
    }

    if (formValues.lastName && formValues.lastName.length < 5) {
      setError((error.lastNameError = "Last Name is to short."));
      formIsValid = false;
    } else if (!formValues.lastName) {
      setError((error.lastNameError = "Last Name required."));
      formIsValid = false;
    }

    if (parseInt(now.getFullYear()) - parseInt(birth.getFullYear()) <= 18) {
      setError((error.birthDateError = "Age should be between 18+"));
      formIsValid = false;
    }
    return formIsValid;
  };

  return (
    <div className="login-form">
      <form>
        <div className="form-icon">
          <span>UserDetails</span>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control item"
            placeholder="Enter FirstName"
            name="firstName"
            onChange={handleInput}
          />
        </div>
        {error.required != "" && (
          <div style={{ color: "red" }}>{error.required}</div>
        )}

        {error.firstNameError != "" && (
          <div style={{ color: "red" }}>{error.firstNameError}</div>
        )}
        <div className="form-group">
          <input
            type="text"
            className="form-control item"
            name="middleName"
            placeholder="Enter MiddleName"
            onChange={handleInput}
          />
        </div>
        {error.middleNameError != "" && (
          <div style={{ color: "red" }}>{error.middleNameError}</div>
        )}
        <div className="form-group">
          <input
            type="lastname"
            className="form-control item"
            name="lastName"
            placeholder="Enter LastName"
            onChange={handleInput}
          />
        </div>
        {error.lastNameError != "" && (
          <div style={{ color: "red" }}>{error.lastNameError}</div>
        )}
        <div className="form-group">
          <input
            type="date"
            className="form-control item"
            name="birthDate"
            placeholder="Enter DateOfBirth"
            onChange={handleInput}
          />
        </div>
        {error.birthDateError != "" && (
          <div style={{ color: "red" }}>{error.birthDateError}</div>
        )}
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-block create-account"
            onClick={submitForm}
          >
            Submit
          </button>
        </div>
      </form>
      {error.valid && (
        <div
          style={{
            color: "white",
            backgroundColor: "red",
            fontSize: "2rem",
            padding: "0.5rem",
          }}
        >
          Error!{" "}
        </div>
      )}
    </div>
  );
}

export default UserDetails;
