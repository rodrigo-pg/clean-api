import { CreateUserUseCase } from "@/user/domain/ports/use-cases/create-user-use-case";
import { UserRepository } from "@/user/domain/ports/user-repository";
import { CPF } from "../entities/CPF";
import { Name } from "../entities/Name";
import { User } from "../entities/user";
import { InvalidParamError } from "../errors/invalid-param-error";
import { InvalidUserError } from "../errors/invalid-user-error";

export class CreateUser implements CreateUserUseCase {

    constructor(private userRepository: UserRepository){}

    async execute(userData: CreateUserUseCase.Input): Promise<CreateUserUseCase.Output> {
        const cpf = CPF.create(userData.cpf);

        if (cpf instanceof InvalidParamError) {
            return new InvalidParamError("cpf");
        }

        const name = Name.create(userData.name);

        if (name instanceof InvalidParamError) {
            return new InvalidParamError("name");
        }

        if (await this.userRepository.exists(userData.cpf)) {
            return new InvalidUserError("User already exists");
        }

        const user: User = {
            cpf: cpf.getValue(),
            name: name.getValue(),
            skills: userData.skills
        }

        await this.userRepository.add(user);
    }
}