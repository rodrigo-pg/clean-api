import { Either, left, right } from "../../../shared/either";
import { InvalidParamError } from "../errors/invalid-param-error";

export class Name {

    private constructor(private name: string) {
        Object.freeze(this);
    }

    static isValid(name: string): boolean {
        if (!name.trim() || name.trim().length < 2 || name.trim().length > 255) {
            return false;
        }
        return true;
    }

    static create(name: string): Either<InvalidParamError, Name> {
        if(!this.isValid(name)) {
            return left(new InvalidParamError("name"));
        }
        return right(new Name(name));
    }

    getValue(): string {
        return this.name;
    }
}