import { Result } from "@/shared/result";

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

    static create(name: string): Result<Name> {
        if(!this.isValid(name)) {
            return Result.fail<Name>("Name is invalid");
        }
        return Result.ok<Name>(new Name(name));
    }

    getValue(): string {
        return this.name;
    }
}