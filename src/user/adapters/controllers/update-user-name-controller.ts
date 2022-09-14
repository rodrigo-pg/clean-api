import { UpdateUserNameUseCase } from "@/user/domain/ports/use-cases/update-user-name-use-case";
import { Controller } from "./controller";
import { MissingParamError } from "../errors/missing-param-error";
import { badRequest, ok, serverError } from "./helpers/http-helper";
import { HttpRequest, HttpResponse } from "./ports/http";

export class UpdateUserNameController implements Controller {

    constructor(private updateUserNameUseCase: UpdateUserNameUseCase) {}

    async handle(request: HttpRequest): Promise<HttpResponse> {
        const { cpf, name } = request.body;

        if (!cpf || !name) {
            const param = !cpf ? "cpf" : "name";
            return badRequest(new MissingParamError(param));
        }

        try {
            const response = await this.updateUserNameUseCase.execute(cpf, name);

            console.log(response.value, 8888)

            if (response.isLeft()){
                return badRequest(response.value);
            }

            return ok({result: "User updated successfully"});
        } catch (error) {
            console.log(error.message, 99999)
            serverError("internal"); 
        }
    }
}