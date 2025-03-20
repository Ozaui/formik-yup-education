import * as yup from "yup";

export const registerFromSchemas = yup.object().shape({
  email: yup
    .string()
    .email(`Please enter true email adress`)
    .required(`Email address cannot be left blank`),
  age: yup
    .number()
    .positive(`Please enter positive number`)
    .integer(`Please enter an integer`)
    .required(`Age cannot be left blank`),
  password: yup.string().required(`Password cannot be left blank`),
  confirmPassword: yup
    .string()
    .required(`The password repeat field cannot be left blank.`)
    .oneOf([yup.ref(`password`), yup.password], `Passwords do not match`),
  term: yup.boolean().required(`Please cheack the box `),
});
