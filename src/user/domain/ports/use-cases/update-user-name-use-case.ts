import { Either } from "@/shared/either";
import { InvalidUserError } from "../../errors/invalid-user-error";

export interface UpdateUserNameUseCase {
    execute(userCpf: string, newName: string): Promise<UpdateUserNameUseCase.Output>;
}

export namespace UpdateUserNameUseCase {
    export type Output = Either<InvalidUserError, string>;
}