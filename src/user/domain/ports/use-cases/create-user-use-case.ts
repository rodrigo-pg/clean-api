import { Either } from "@/shared/either";
import { InvalidParamError } from "../../errors/invalid-param-error";
import { InvalidUserError } from "../../errors/invalid-user-error";

export interface CreateUserUseCase {
    execute(userData: CreateUserUseCase.Input): Promise<CreateUserUseCase.Output>;
}

export namespace CreateUserUseCase {
    export type Input = {
        cpf: string;
        name: string;
        skills: Array<string>;
    }

    export type Output = Either<InvalidParamError | InvalidUserError, Input>;
}