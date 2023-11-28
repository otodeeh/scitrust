export const accountSchema = {
  type: "object",
  properties: {
    accessToken: {
      type: "string",
    },
    id: {
      type: "number",
    },
    name: {
      type: "string",
    },
  },
  required: ["accessToken", "id", "name"],
};
