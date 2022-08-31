import { CreateUserUseCase } from "@/user/domain/ports/use-cases/create-user-use-case";
import { Controller } from "./controller";
import { MissingParamError } from "./errors/missing-param-error";
import { badRequest, created, serverError } from "./helpers/http-helper";
import { HttpRequest, HttpResponse } from "./ports/http";

export class CreateUserController implements Controller {

    constructor(private createUserUseCase: CreateUserUseCase) {}

    async handle(request: HttpRequest): Promise<HttpResponse> {
        const { cpf, name, skills } = request.body;
        const userData = { cpf, name, skills };

        if (!cpf || !name) {
            const field = !request.body.cpf ? 'cpf' : 'name';
            return badRequest(new MissingParamError(field));
        }

        try {
            const response = await this.createUserUseCase.execute(userData);

            if (response.isLeft()) {
                return badRequest(response.value);
            }

            return created({result: "User created successfully"});
        } catch (error) {
            return serverError("internal");
        }
    }
}