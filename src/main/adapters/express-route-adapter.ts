import { Controller } from "@/user/adapters/controllers/controller";
import { HttpRequest } from "@/user/adapters/controllers/ports/http";
import { Request, Response } from 'express';

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body,
      params: req.params
    }
    const httpResponse = await controller.handle(httpRequest)
    console.log(httpResponse)
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}