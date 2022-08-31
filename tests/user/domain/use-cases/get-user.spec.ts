import { InvalidUserError } from "../errors/invalid-user-error";
import { GetUser } from "../../../../src/user/domain/use-cases/get-user";
import { UserRepositorySpy } from "../mocks/mock-user-repository";

describe("GetUser", () => {

    let sut: GetUser;
    let userRepository: UserRepositorySpy;
    const USER = {
        cpf: "11217604911",
        name: "test",
        skills: ["poo", "devOps"]
    }

    beforeEach(async () => {
        userRepository = new UserRepositorySpy();
        sut = new GetUser(userRepository);
        await userRepository.add(USER);
    })

    it("Shoud get user", async () => {
        const user = await sut.execute(USER.cpf);

        expect(user.cpf).toEqual(USER.cpf);
        expect(user.name).toEqual(USER.name);
    })

    it("Shoud except if user doesn't exists", async () => {
        try {
            await sut.execute("165739102")
            fail();
        } catch (error) {
            expect(error).toBeInstanceOf(InvalidUserError);
            expect(error.message).toEqual("User not found");
        }
    })
})