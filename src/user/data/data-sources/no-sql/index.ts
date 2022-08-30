import { User } from "@/user/domain/entities/user";
import { NoSQLDatabaseWrapper } from "../../protocols/data-sources/wrappers/no-sql-database-wrapper";
import { UserDataSource } from "../../protocols/data-sources/user-data-source";

export class NoSQLDatabaseUserDataSource implements UserDataSource {

    constructor(private NoSQLDbWrapper: NoSQLDatabaseWrapper) {}

    async add(user: User): Promise<void> {
        await this.NoSQLDbWrapper.insertOne(user);
    }

    async get(cpf: string): Promise<User |null> {
        return await this.NoSQLDbWrapper.findOne(cpf);
    }

    async update(cpf: string, data: Partial<Omit<User, "cpf">>): Promise<void> {
        await this.NoSQLDbWrapper.update(cpf, data);
    } 

    async delete(cpf: string): Promise<void> {
        await this.NoSQLDbWrapper.delete(cpf);
    }
}