import { HttpRequest, HttpResponse } from "./http";

export interface Middleware {
  handle(HttpRequest: HttpRequest<any, any, any>): Promise<HttpResponse>;
}
