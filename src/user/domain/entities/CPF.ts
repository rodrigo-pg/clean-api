import { Either, left, right } from "@/shared/either";
import { InvalidParamError } from "../errors/invalid-param-error";

export class CPF {

    constructor(private cpf: string) {
        Object.freeze(this);
    }

    static isValid(cpf: string): boolean {
        if (!cpf.trim() || cpf.trim().length != 11) {
            return false;
        }
        return true;
    }

    static create(cpf: string): Either<InvalidParamError, CPF> {
        if(!this.isValid(cpf)) {
            return left(new InvalidParamError("cpf"));
        }
        return right(new CPF(cpf));
    }

    getValue(): string {
        return this.cpf;
    }
}