import { Either } from "@/shared/either";
import { UserDTO } from "../../entities/userDTO";
import { InvalidUserError } from "../../errors/invalid-user-error";

export interface GetUserUseCase {
    execute(cpf: GetUserUseCase.Input): Promise<GetUserUseCase.Output>
}

export namespace GetUserUseCase {
    export type Input = string;
    export type Output = Either<InvalidUserError, UserDTO>;
}