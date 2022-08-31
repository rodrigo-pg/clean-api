import { UseCaseError } from ".";

export class InvalidUserError extends Error implements UseCaseError {
    constructor(reason: string) {
        super(reason);
        this.name = "InvalidUserError";
    }
}