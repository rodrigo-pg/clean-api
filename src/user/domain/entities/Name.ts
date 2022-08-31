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

    static create(name: string): Name | InvalidParamError {
        if(!this.isValid(name)) {
            return new InvalidParamError("name");
        }
        return new Name(name);
    }

    getValue(): string {
        return this.name;
    }
}