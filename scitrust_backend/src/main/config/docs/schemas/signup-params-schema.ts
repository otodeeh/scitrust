export const signUpParamsSchema = {
  type: "object",
  properties: {
    birthday: {
      type: "string",
      format: "date-time",
    },
    email: {
      type: "string",
    },
    departmentCode: {
      type: "string",
    },
    name: {
      type: "string",
    },
    password: {
      type: "string",
      format: "password",
    },
    passwordConfirmation: {
      type: "string",
    },
    registration: {
      type: "string",
    },
  },
  required: [
    "birthday",
    "email",
    "departmentCode",
    "name",
    "password",
    "passwordConfirmation",
    "registration",
  ],
};
