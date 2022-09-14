import { left, right } from "../../../shared/either";
import { CreateUserUseCase } from "@/user/domain/ports/use-cases/create-user-use-case";
import { UserRepository } from "@/user/domain/ports/user-repository";
import { CPF } from "../entities/CPF";
import { Name } from "../entities/Name";
import { User } from "../entities/user";
import { InvalidUserError } from "../errors/invalid-user-error";

export class CreateUser implements CreateUserUseCase {

    constructor(private userRepository: UserRepository){}

    async execute(userData: CreateUserUseCase.Input): Promise<CreateUserUseCase.Output> {
        const cpfOrError = CPF.create(userData.cpf);
        const nameOrError = Name.create(userData.name);

        if (cpfOrError.isLeft()) {
            return left(cpfOrError.value);
        }

        if (nameOrError.isLeft()) {
            return left(nameOrError.value);
        }

        if (await this.userRepository.exists(userData.cpf)) {
            return left(new InvalidUserError("User already exists"));
        }

        const user: User = {
            cpf: cpfOrError.value.getValue(),
            name: nameOrError.value.getValue(),
            skills: userData.skills
        }

        await this.userRepository.add(user);

        return right(userData);
    }
}