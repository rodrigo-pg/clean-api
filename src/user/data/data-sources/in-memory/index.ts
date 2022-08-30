import { InMemoryWrapper } from "@/user/data/protocols/data-sources/wrappers/in-memory-wrapper";
import { UserDataSource } from "@/user/data/protocols/data-sources/user-data-source";
import { User } from "@/user/domain/entities/user";

export class InMemoryUserDataSource implements UserDataSource {

    constructor(private storage: InMemoryWrapper) {}

    async add(user: User): Promise<void> {
        this.storage.add(user);
    }

    async get(cpf: string): Promise<User | null> {
        return this.storage.get(cpf);
    }

    async update(cpf: string, data: Partial<Omit<User, "cpf">>): Promise<void> {
        this.storage.update(cpf, data);
    }

    async delete(cpf: string): Promise<void> {
        await this.storage.delete(cpf);
    }
}