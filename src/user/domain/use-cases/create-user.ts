import { Result } from "@/shared/result";
import { CreateUserUseCase } from "@/user/domain/ports/use-cases/create-user-use-case";
import { UserRepository } from "@/user/domain/ports/user-repository";
import { CPF } from "../entities/CPF";
import { Name } from "../entities/Name";
import { User } from "../entities/user";

export class CreateUser implements CreateUserUseCase {

    constructor(private userRepository: UserRepository){}

    async execute(userData: CreateUserUseCase.Input): Promise<CreateUserUseCase.Output> {
        const cpfOrError = CPF.create(userData.cpf);
        const nameOrError = Name.create(userData.name);
        const propResults = Result.combine([cpfOrError, nameOrError]);

        if(propResults.isFailure) {
            return Result.fail<CreateUserUseCase>(propResults.error);
        }

        if (await this.userRepository.exists(userData.cpf)) {
            return Result.fail<CreateUserUseCase>("User already exists");
        }

        const user: User = {
            cpf: cpfOrError.getValue().getValue(),
            name: nameOrError.getValue().getValue(),
            skills: userData.skills
        }

        await this.userRepository.add(user);
    }
}