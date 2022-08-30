import { UserDataSource } from "@/user/data/protocols/data-sources/user-data-source";
import { User } from "../../domain/entities/user";
import { UserRepository } from "../../domain/ports/user-repository";

export class UserRepositoryImpl implements UserRepository {

    constructor(private userDataSource: UserDataSource) {}

    async add(user: User): Promise<void> {
        await this.userDataSource.add(user);
    }

    async exists(cpf: string): Promise<boolean> {
        return Boolean(await this.userDataSource.get(cpf));
    }

    async get(cpf: string): Promise<User | null> {
        return this.userDataSource.get(cpf);
    }

    async update(cpf: string, data: Partial<Omit<User, "cpf">>): Promise<void> {
        this.userDataSource.update(cpf, data);
    }

    async delete(cpf: string): Promise<void> {
        this.userDataSource.delete(cpf);
    }
}