import { DataSource } from "typeorm";

const connectionSource = new DataSource({
    migrationsTableName: 'migrations',
    type: 'sqlite',
    database: './src/shared/typeorm/database/database.sqlite',
    logging: false,
    synchronize: false,
    name: 'default',
    entities: ["./src/user/data/data-sources/no-sql/wrappers/typeorm/models/*.ts"],
    migrations: ["./src/shared/typeorm/database/migrations/*.ts"],
});

export { connectionSource };