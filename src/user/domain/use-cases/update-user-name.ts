import { UpdateUserNameUseCase } from "../ports/use-cases/update-user-name-use-case";
import { UserRepository } from "../ports/user-repository";
import { InvalidUserError } from "../errors/invalid-user-error";

export class UpdateUserName implements UpdateUserNameUseCase {

    constructor(private usersRepository: UserRepository){}

    async execute(userCpf: string, newName: string): Promise<void> {
        const user = await this.usersRepository.get(userCpf);

        if (user === null) {
            throw new InvalidUserError("User not found");
        }

        this.usersRepository.update(user.cpf, {name: newName});
    }
}