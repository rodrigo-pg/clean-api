import { User } from "../../../../src/user/domain/entities/user";
import { InvalidUserError } from "../../../../src/user/domain/use-cases/errors/invalid-user-error";
import { UpdateUserName } from "../../../../src/user/domain/use-cases/update-user-name";
import { UserRepositorySpy } from "../mocks/mock-user-repository";

describe("UpdateUserName", () => {

    let sut:UpdateUserName;
    let userRepository: UserRepositorySpy;
    const USER = {
        cpf: "11217604911",
        name: "test",
        skills: ["poo", "devOps"]
    }

    beforeEach(async () => {
        userRepository = new UserRepositorySpy();
        sut = new UpdateUserName(userRepository);
        await userRepository.add(USER);
    })

    it("Should update user name", async () => {
        await sut.execute(USER.cpf, "Novo");
        const user = (await userRepository.get(USER.cpf)) as User;
        
        expect(user.name).toEqual("Novo");
    })

    it("Should except if user doesn't exists", async () => {
        try {
            await sut.execute("11217604918", "Novo");
            fail();
        } catch (error) {
            expect(error).toBeInstanceOf(InvalidUserError);
            expect(error.message).toEqual("User not found");
        }
    })
})