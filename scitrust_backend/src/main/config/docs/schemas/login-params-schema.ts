export const loginParamsSchema = {
  type: "object",
  properties: {
    registration: {
      type: "string",
    },
    password: {
      type: "string",
    },
  },
  required: ["registration", "password"],
};
