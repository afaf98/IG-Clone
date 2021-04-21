import * as yup from "yup";

const schema = {
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
};

export default schema;
