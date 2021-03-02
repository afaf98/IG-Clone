import * as yup from "yup";

export default {
  firstName: yup.string().required(),
  lastName: yup.string().required(),
};
