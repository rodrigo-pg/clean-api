import { connectionSource } from "../../../../shared/typeorm/data-source";
import { NoSQLDatabaseUserDataSource } from "../../data-sources/no-sql";
import { TypeORMDBWrapper } from "../../data-sources/no-sql/wrappers/typeorm";
import { UserModel } from "../../data-sources/no-sql/wrappers/typeorm/models/UserModel";
import { UserRepositoryImpl } from "../user-repository";

const typeORMDBWrapper = new TypeORMDBWrapper(connectionSource.getRepository(UserModel));
const noSQLDatabaseUserDataSource = new NoSQLDatabaseUserDataSource(typeORMDBWrapper);
const userRepository = new UserRepositoryImpl(noSQLDatabaseUserDataSource);

export { userRepository };