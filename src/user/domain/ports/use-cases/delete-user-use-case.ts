import { Either } from "@/shared/either";
import { InvalidUserError } from "../../errors/invalid-user-error";

export interface DeleteUserUseCase {
    execute(cpf: string): Promise<DeleteUserUseCase.Output>;
}

export namespace DeleteUserUseCase {
    export type Output = Either<InvalidUserError, string>;
}