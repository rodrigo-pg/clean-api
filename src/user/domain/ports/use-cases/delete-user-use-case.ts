export interface DeleteUserUseCase {
    execute(cpf: string): Promise<void>;
}