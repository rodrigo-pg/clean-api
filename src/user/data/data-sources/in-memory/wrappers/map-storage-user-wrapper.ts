import { InMemoryWrapper } from "@/user/data/protocols/data-sources/wrappers/in-memory-wrapper";
import { User } from "@/user/domain/entities/user";

export class MapStorageUserWrapper implements InMemoryWrapper {

    private users: Map<string, User>;

    constructor() {
        this.users = new Map<string, User>();
    }

    async add(user: User) {
        this.users.set(user.cpf, user);
    }

    async get(cpf: string) {
        const user = this.users.get(cpf);
        return user ? user : null;
    }

    async update(cpf: string, data: Partial<Omit<User, "cpf">>): Promise<void> {
        const user = this.users.get(cpf);
        const updatedData = Object.assign(user, data);
        this.users.set(cpf, updatedData);
    } 

    async delete(cpf: string): Promise<void> {
        this.users.delete(cpf);
    }
}