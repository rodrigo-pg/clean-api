export interface UpdateUserNameUseCase {
    execute(userCpf: UpdateUserNameUseCase.Input, newName: UpdateUserNameUseCase.Input): Promise<UpdateUserNameUseCase.Output>;
}

export namespace UpdateUserNameUseCase {
    export type Input = string;
    export type Output = void;
}