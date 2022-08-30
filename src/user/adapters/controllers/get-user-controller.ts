import { GetUserUseCase } from "@/user/domain/ports/use-cases/get-user-use-case";
import { Controller } from "./controller";
import { MissingParamError } from "./errors/missing-param-error";
import { badRequest, ok, serverError } from "./helpers/http-helper";
import { HttpRequest, HttpResponse } from "./ports/http";

export class GetUserController implements Controller {

    constructor(private getUserUseCase: GetUserUseCase) {}

    async handle(request: HttpRequest): Promise<HttpResponse> {
        const { cpf } = request.params;

        if (!cpf) {
            return badRequest(new MissingParamError(cpf));
        }

        try {
            const result = await this.getUserUseCase.execute(cpf);
            return ok({result});
        } catch (error) {
            return error instanceof Error ? badRequest(error) : serverError("internal");
        }
    }

}