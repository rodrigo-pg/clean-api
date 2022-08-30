import { User } from "@/user/domain/entities/user";
import { UserRepository } from "@/user/domain/ports/user-repository";

export class UserRepositorySpy implements UserRepository {

    private users: Map<string, User>;

    constructor() {
        this.users = new Map<string, User>();
    }

    async add(user: User): Promise<void> {
        this.users.set(user.cpf, user);
    }

    async get(cpf: string): Promise<User | null> {
        const user = this.users.get(cpf);
        return user ? user : null;
    }

    async exists(cpf: string): Promise<boolean> {
        return !!this.users.get(cpf);
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