import { User } from "@/user/domain/entities/user"

export interface NoSQLDatabaseWrapper {
    findOne(cpf: string): Promise<User | null>;
    insertOne(user: User): Promise<void>;
    update(cpf: string, data: Partial<Omit<User, "cpf">>): Promise<void>;
    delete(cpf: string): Promise<void>;
}