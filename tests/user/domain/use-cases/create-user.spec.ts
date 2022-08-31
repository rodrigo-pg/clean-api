import { UserRepositorySpy } from "../mocks/mock-user-repository";
import { CreateUser } from "../../../../src/user/domain/use-cases/create-user";
import { User } from "../../../../src/user/domain/entities/user";
import { InvalidUserError } from "../errors/invalid-user-error";
import { InvalidParamError } from "../errors/invalid-param-error";

describe("CreateUser", () => {

    let sut: CreateUser;
    let userRepository: UserRepositorySpy;
    const USER_DATA = {
        cpf: "11217604911",
        name: "test",
        skills: ["poo", "devOps"]
    }

    beforeEach(async () => {
        userRepository = new UserRepositorySpy();
        sut = new CreateUser(userRepository);
    })

    it("Shoud create user", async () => {
        await sut.execute(USER_DATA);
        const user = await userRepository.get(USER_DATA.cpf) as User;

        expect(user.cpf).toEqual(USER_DATA.cpf);
        expect(user.name).toEqual(USER_DATA.name);
    })

    it("Shoud except if cpf is invalid", async () => {
        try {
            await sut.execute({cpf:"", name:"Test", skills: ["poo"]})
            fail();
        } catch (error) {
            expect(error).toBeInstanceOf(InvalidParamError);
            expect(error.message).toEqual("Invalid cpf");
        }
    })

    it("Shoud except if name is invalid", async () => {
        try {
            await sut.execute({cpf:"11276810956", name:"", skills: ["poo"]})
            fail();
        } catch (error) {
            expect(error).toBeInstanceOf(InvalidParamError);
            expect(error.message).toEqual("Invalid name");
        }
    })

    it("Shoud except if user already exists", async () => {
        await sut.execute(USER_DATA);
        try {
            await sut.execute(USER_DATA);
            fail();
        } catch (error) {
            expect(error).toBeInstanceOf(InvalidUserError);
            expect(error.message).toEqual("User already exists");
        }
    })
})