import { InMemoryUserDataSource } from "../../data-sources/in-memory";
import { MapStorageUserWrapper } from "../../data-sources/in-memory/wrappers/map-storage-user-wrapper";
import { UserRepositoryImpl } from "../user-repository";

const mapStorageWrapper = new MapStorageUserWrapper();
const inMemoryUserDataSource = new InMemoryUserDataSource(mapStorageWrapper);
const userRepository = new UserRepositoryImpl(inMemoryUserDataSource);

export { userRepository };