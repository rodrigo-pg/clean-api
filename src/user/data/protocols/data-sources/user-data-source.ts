import { User } from "@/user/domain/entities/user";

export interface UserDataSource {
    add(user: User): Promise<void>;
    get(cpf: string): Promise<User | null>;
    update(cpf: string, data: Partial<Omit<User, "cpf">>): Promise<void>;
    delete(cpf: string): Promise<void>;
}