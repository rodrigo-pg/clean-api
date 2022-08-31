import { DeleteUserUseCase } from "../ports/use-cases/delete-user-use-case";
import { UserRepository } from "../ports/user-repository";
import { InvalidUserError } from "../errors/invalid-user-error";

export class DeleteUser implements DeleteUserUseCase {

    constructor(private usersRepository: UserRepository) {}

    async execute(cpf: string): Promise<void> {

        if (!(await this.usersRepository.exists(cpf))) {
            throw new InvalidUserError("User not found");
        }

        await this.usersRepository.delete(cpf);
    }
}