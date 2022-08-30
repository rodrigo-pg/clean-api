import { User } from "../entities/user";

export interface UserRepository {
    add(user: User): Promise<void>;
    exists(cpf: string): Promise<boolean>;
    get(cpf: string): Promise<User | null>;
    update(cpf: string, data: Partial<Omit<User, "cpf">>): Promise<void>;
    delete(cpf: string): Promise<void>;
}