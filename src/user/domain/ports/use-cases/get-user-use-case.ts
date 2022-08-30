import { UserDTO } from "../../entities/userDTO";

export interface GetUserUseCase {
    execute(cpf: GetUserUseCase.Input): Promise<GetUserUseCase.Output>
}

export namespace GetUserUseCase {
    export type Input = string;
    export type Output = UserDTO;
}