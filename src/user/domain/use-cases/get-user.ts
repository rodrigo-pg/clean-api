import { UserDTO } from "../entities/userDTO";
import { GetUserUseCase } from "../ports/use-cases/get-user-use-case";
import { UserRepository } from "../ports/user-repository";
import { InvalidUserError } from "./errors/invalid-user-error";

export class GetUser implements GetUserUseCase {

    constructor(private userRepository: UserRepository){}

    async execute(cpf: GetUserUseCase.Input): Promise<GetUserUseCase.Output> {
        const result = await this.userRepository.get(cpf);

        if(result === null) {
            throw new InvalidUserError("User not found");
        }

        const dto: UserDTO = {
            cpf: result.cpf,
            name: result.name,
            skills: result.skills
        }

        return dto;
    }
}