import { DeleteUserUseCase } from "../ports/use-cases/delete-user-use-case";
import { UserRepository } from "../ports/user-repository";
import { InvalidUserError } from "../errors/invalid-user-error";
import { left } from "../../../shared/either";

export class DeleteUser implements DeleteUserUseCase {

    constructor(private usersRepository: UserRepository) {}

    async execute(cpf: string): Promise<DeleteUserUseCase.Output> {

        if (!(await this.usersRepository.exists(cpf))) {
            return left(new InvalidUserError("User not found"));
        }

        await this.usersRepository.delete(cpf);
    }
}