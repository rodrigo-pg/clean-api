import { MongoDBUserWrapper } from "../../data-sources/no-sql/wrappers/mongo-db-user-wrapper";
import { NoSQLDatabaseUserDataSource } from "../../data-sources/no-sql";
import { MongoClient } from "mongodb";
import { UserRepositoryImpl } from "../user-repository";

let userRepository: UserRepositoryImpl;

async function getMongoDB() {
    const client = new MongoClient("mongodb://localhost:27017/contacts");
    await client.connect();
    const result = client.db("USERS_DB");
    return result;
}

(async () => {
    const mongoDBUserWrapper = new MongoDBUserWrapper(await getMongoDB());
    const noSQLDatabaseUserDataSource = new NoSQLDatabaseUserDataSource(mongoDBUserWrapper);
    userRepository = new UserRepositoryImpl(noSQLDatabaseUserDataSource);
})()

export { userRepository };