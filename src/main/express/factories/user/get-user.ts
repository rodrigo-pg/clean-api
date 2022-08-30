import { GetUser } from "../../../../user/domain/use-cases/get-user";
import { userRepository } from "../../../../user/data/repositories/implementations/type-orm-repository";
import { Controller } from "../../../../user/adapters/controllers/controller";
import { GetUserController } from "../../../../user/adapters/controllers/get-user-controller";

export const makeGetUserController = (): Controller => {
    const getUserUseCase = new GetUser(userRepository);
    const getUserController = new GetUserController(getUserUseCase);
    return getUserController;
}