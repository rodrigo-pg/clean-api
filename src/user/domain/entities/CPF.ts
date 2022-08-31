import { Result } from "@/shared/result";

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

    static create(cpf: string): Result<CPF> {
        if(!this.isValid(cpf)) {
            return Result.fail<CPF>("CPF is invalid");
        }
        return Result.ok<CPF>(new CPF(cpf));
    }

    getValue(): string {
        return this.cpf;
    }
}