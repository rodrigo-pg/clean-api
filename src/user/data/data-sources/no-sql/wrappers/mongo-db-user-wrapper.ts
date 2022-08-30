import { User } from "@/user/domain/entities/user";
import { Db } from 'mongodb';
import { NoSQLDatabaseWrapper } from "../../../protocols/data-sources/wrappers/no-sql-database-wrapper";

export class MongoDBUserWrapper implements NoSQLDatabaseWrapper {

    constructor(private db: Db) {}

    async findOne(cpf: string): Promise<User | null> {
        const user = {
            name: "",
            cpf: "",
            skills: [""]
        }
        return user;
    }

    async insertOne(user: User): Promise<void> {}

    async update(cpf: string, data: Partial<Omit<User, "cpf">>): Promise<void> {} 

    async delete(cpf: string): Promise<void> {}
}