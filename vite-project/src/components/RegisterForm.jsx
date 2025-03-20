import React from "react";
import { useFormik } from "formik";

function RegisterForm() {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      term: "",
    },
  });

  return (
    <div>
      <form>
        <div className="form-div">
          <label>E-mail</label>
          <input
            type="text"
            id="email"
            placeholder="please enter your email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-div">
          <label>Age</label>
          <input
            type="number"
            id="age"
            placeholder="please enter your age"
            value={values.age}
            onChange={handleChange}
          />
        </div>

        <div className="form-div">
          <label>Password</label>
          <input
            type="password"
            id="password"
            placeholder="please enter your password"
            value={values.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-div">
          <label>Repeat Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="please enter your password again"
            value={values.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="form-div">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              type="checkbox"
              id="term"
              value={values.term}
              onChange={handleChange}
              style={{ width: "20px", height: "12px" }}
            />
            <label>I accept the user agreement</label>
          </div>
        </div>
        <div className="form-div">
          <button>Save</button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
