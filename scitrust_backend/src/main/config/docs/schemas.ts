import {
  accountSchema,
  loginParamsSchema,
  recoverAccountPasswordParamsSchema,
  signUpParamsSchema
} from "./schemas/";

export default {
  account: accountSchema,
  loginParams: loginParamsSchema,
  signUpParams: signUpParamsSchema,
  recoverAccountPasswordParams: recoverAccountPasswordParamsSchema,
};
