import { connectionSource } from "../../shared/typeorm/data-source";

connectionSource
.initialize()
.then(() => {
    console.log("TypeORM - Data Source has been initialized!");
    import("../express/index");
})
.catch((err) => {
    console.error("Error during Data Source initialization", err);
})