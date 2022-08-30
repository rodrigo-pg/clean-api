export interface CreateUserUseCase {
    execute(userData: CreateUserUseCase.Input): Promise<CreateUserUseCase.Output>;
}

export namespace CreateUserUseCase {
    export type Input = {
        cpf: string;
        name: string;
        skills: Array<string>;
    }

    export type Output = void;
}