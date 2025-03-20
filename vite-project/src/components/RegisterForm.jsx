import React from "react";
import { useFormik } from "formik";
import { registerFromSchemas } from "../schemas/RegisterFormSchemas";

function RegisterForm() {
  const submit = (values, action) => {
    console.log(values);
    console.log(action);
    setTimeout(() => {
      action.resetForm();
    }, 2000);
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      term: "",
    },
    validationSchema: registerFromSchemas,
    onSubmit: submit,
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-div">
          <label>E-mail</label>
          <input
            type="text"
            id="email"
            placeholder="please enter your email"
            value={values.email}
            onChange={handleChange}
          />
          <p className="p-error">{errors.email && errors.email}</p>
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
          <p className="p-error">{errors.age && errors.age}</p>
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
          <p className="p-error">{errors.password && errors.password}</p>
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
          <p className="p-error">
            {errors.confirmPassword && errors.confirmPassword}
          </p>
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
          <p className="p-error" style={{ textAlign: "center" }}>
            {errors.term && errors.term}
          </p>
        </div>
        <div className="form-div">
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
