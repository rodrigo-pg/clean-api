import { InvalidUserError } from "../../../../src/user/domain/use-cases/errors/invalid-user-error";
import { UserRepositorySpy } from "../mocks/mock-user-repository";
import { DeleteUser } from "../../../../src/user/domain/use-cases/delete-user";

describe("DeleteUser", () => {

    let sut: DeleteUser;
    let usersRepository: UserRepositorySpy;
    const USER_DATA = {
        cpf: "16572819008",
        name: "Test",
        skills: ["poo", "devOps"]
    }

    beforeEach(() => {
        usersRepository = new UserRepositorySpy();
        sut = new DeleteUser(usersRepository);
        usersRepository.add(USER_DATA);
    })

    it("Should delete a user", async ()=> {
        await sut.execute(USER_DATA.cpf);
        expect(await usersRepository.get(USER_DATA.cpf)).toBeNull();
    })

    it("Should except if user does not exist", async () => {
        try {
            await sut.execute("15436210867");
            fail();
        } catch (error) {
            expect(error).toBeInstanceOf(InvalidUserError);
            expect(error.message).toEqual("User not found");
        }
    })
})