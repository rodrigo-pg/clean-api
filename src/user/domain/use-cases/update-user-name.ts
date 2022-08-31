import { UpdateUserNameUseCase } from "../ports/use-cases/update-user-name-use-case";
import { UserRepository } from "../ports/user-repository";
import { InvalidUserError } from "../errors/invalid-user-error";
import { left, right } from "@/shared/either";

export class UpdateUserName implements UpdateUserNameUseCase {

    constructor(private usersRepository: UserRepository){}

    async execute(userCpf: string, newName: string): Promise<UpdateUserNameUseCase.Output> {
        const user = await this.usersRepository.get(userCpf);

        if (user === null) {
            return left(new InvalidUserError("User not found"));
        }

        this.usersRepository.update(user.cpf, {name: newName});

        return right(userCpf);
    }
}