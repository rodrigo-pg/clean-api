import { UseCaseError } from ".";

export class InvalidParamError extends Error implements UseCaseError {
    constructor(paramName: string) {
        super(`Invalid ${paramName}`);
        this.name = "InvalidParamError";
    }
}