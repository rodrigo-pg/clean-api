import { DeleteUserUseCase } from "@/user/domain/ports/use-cases/delete-user-use-case";
import { Controller } from "./controller";
import { MissingParamError } from "./errors/missing-param-error";
import { badRequest, ok, serverError } from "./helpers/http-helper";
import { HttpRequest, HttpResponse } from "./ports/http";

export class DeleteUserController implements Controller {

    constructor(private deleteUserUseCase: DeleteUserUseCase) {}

    async handle(request: HttpRequest): Promise<HttpResponse> {
        const { cpf } = request.body;

        if (!cpf) {
            throw new MissingParamError("cpf");
        }

        try {
            const response = await this.deleteUserUseCase.execute(cpf);

            if (response.isLeft()) {
                return badRequest(response.value);
            }

            return ok({
                result: "User successfully deleted"
            });
        } catch (error) {
            serverError("internal");
        }
    }

}