import { ServerError } from "../../errors/server-error"
import { HttpResponse } from "../ports/http"

export const badRequest = (error: Error): HttpResponse => ({
    statusCode: 400,
    body: {
      error: error.message
    }
})

export const created = (data: any): HttpResponse => ({
    statusCode: 201,
    body: data
})
  
export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const serverError = (reason: string): HttpResponse => ({
  statusCode: 500,
  body: {
    error: new ServerError(reason)
  }
})