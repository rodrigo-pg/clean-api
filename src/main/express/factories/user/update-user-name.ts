import { userRepository } from "../../../../user/data/repositories/implementations/type-orm-repository";
import { Controller } from "../../../../user/adapters/controllers/controller";
import { UpdateUserName } from "../../../../user/domain/use-cases/update-user-name";
import { UpdateUserNameController } from "../../../../user/adapters/controllers/update-user-name-controller";

export const makeUpdateUserNameController = (): Controller => {
    const getUserUseCase = new UpdateUserName(userRepository);
    const getUserController = new UpdateUserNameController(getUserUseCase);
    return getUserController;
}