import * as yup from "yup";

const schema = {
  firstName: yup.string().required(),
  lastName: yup.string().required(),
};

export default schema;
