import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUsers1661876637957 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                {
                    name:"cpf",
                    isPrimary:true,
                    type:"varchar"
                }, 
                {
                    name:"name",
                    type:"varchar"
                },
                {
                    name:"skills",
                    type:"array",
                    isArray:true
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
