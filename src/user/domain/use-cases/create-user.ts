import { CreateUserUseCase } from "@/user/domain/ports/use-cases/create-user-use-case";
import { UserRepository } from "@/user/domain/ports/user-repository";
import { User } from "../entities/user";
import { InvalidParamError } from "./errors/invalid-param-error";
import { InvalidUserError } from "./errors/invalid-user-error";

export class CreateUser implements CreateUserUseCase {

    constructor(private userRepository: UserRepository){}

    async execute(userData: CreateUserUseCase.Input): Promise<CreateUserUseCase.Output> {
        if (!userData.cpf.trim()) {
            throw new InvalidParamError("cpf");
        }
        if (!userData.name.trim()) {
            throw new InvalidParamError("name");
        }
        if (!(userData.skills.length >= 0)) {
            throw new InvalidParamError("skills");
        }
        if (await this.userRepository.exists(userData.cpf)) {
            throw new InvalidUserError("User already exists");
        }
        const user: User = {
            cpf: userData.cpf,
            name: userData.name,
            skills: userData.skills
        }
        await this.userRepository.add(user);
    }
}