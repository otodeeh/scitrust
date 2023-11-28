export const recoverAccountPasswordParamsSchema = {
  type: "object",
  properties: {
    birthday: {
      type: "string",
      format: "date-time",
    },
    email: {
      type: "string",
    },
    password: {
      type: "string",
      format: "password",
    },
    passwordConfirmation: {
      type: "string",
    },
  },
  required: ["birthday", "email", "password", "passwordConfirmation"],
};
