import { userRepository } from "../../../../user/data/repositories/implementations/type-orm-repository";
import { CreateUser } from "../../../../user/domain/use-cases/create-user";
import { Controller } from "../../../../user/adapters/controllers/controller";
import { CreateUserController } from "../../../../user/adapters/controllers/create-user-controller";

export const makeCreateUserController = (): Controller => {
    const createUserUseCase = new CreateUser(userRepository);
    const createUserController = new CreateUserController(createUserUseCase);
    return createUserController;
}