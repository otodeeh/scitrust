import {
  DataNotFoundError,
  ServerError,
  UnauthorizedError,
} from "presentation/errors";
import { HttpResponse } from "presentation/protocols";

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
});

export const unauthorized = (): HttpResponse => ({
  statusCode: 401,
  body: new UnauthorizedError(),
});

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  body: error,
});

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack),
});

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
});

export const created = (data: any): HttpResponse => ({
  statusCode: 201,
  body: data,
});

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null,
});

export const notFound = (paramName: string) => ({
  statusCode: 404,
  body: new DataNotFoundError(paramName),
});
