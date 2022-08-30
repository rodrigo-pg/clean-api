import { makeCreateUserController } from "../../factories/user/create-user"
import { Router } from "express"
import { adaptRoute } from '../../../adapters/express-route-adapter'
import { makeGetUserController } from "../../factories/user/get-user";
import { makeUpdateUserNameController } from "../../factories/user/update-user-name";
import { makeDeleteUserController } from "../../factories/user/delete-user";

export default (router: Router): void => {
    router.post('/create-user', adaptRoute(makeCreateUserController()));
    router.get('/get-user/:cpf', adaptRoute(makeGetUserController()));
    router.post('/update-user-name', adaptRoute(makeUpdateUserNameController()));
    router.post('/delete-user', adaptRoute(makeDeleteUserController()));
}