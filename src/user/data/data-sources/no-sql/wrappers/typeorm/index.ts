import { NoSQLDatabaseWrapper } from "@/user/data/protocols/data-sources/wrappers/no-sql-database-wrapper";
import { User } from "@/user/domain/entities/user";
import { Repository } from "typeorm";
import { UserModel } from "./models/UserModel";

class TypeORMDBWrapper implements NoSQLDatabaseWrapper {

    constructor(private customUserRepository: Repository<UserModel>) {}

    async findOne(cpf: string): Promise<User | null> {
        return await this.customUserRepository.findOneBy({cpf});
    }

    async insertOne(user: User): Promise<void> {
        const userEntry = this.customUserRepository.create(user);
        await this.customUserRepository.save(userEntry);
    }

    async update(cpf: string, data: Partial<Omit<User, "cpf">>): Promise<void> {
        await this.customUserRepository.update({cpf}, data);
    }

    async delete(cpf: string): Promise<void> {
        await this.customUserRepository.delete({cpf});
    }
}

export { TypeORMDBWrapper };
