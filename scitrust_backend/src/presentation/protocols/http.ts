export interface HttpResponse {
  statusCode: number;
  body: any;
}
export interface HttpRequest<T, P, Q> {
  headers?: any;
  body?: T;
  params?: P;
  query?: Q;
}
