import { userRepository } from "../../../../user/data/repositories/implementations/type-orm-repository";
import { DeleteUser } from "../../../../user/domain/use-cases/delete-user";
import { Controller } from "../../../../user/adapters/controllers/controller";
import { DeleteUserController } from "../../../../user/adapters/controllers/delete-user-controller";

export const makeDeleteUserController = (): Controller => {
    const deleteUserUseCase = new DeleteUser(userRepository);
    const deleteUserController = new DeleteUserController(deleteUserUseCase);
    return deleteUserController;
}