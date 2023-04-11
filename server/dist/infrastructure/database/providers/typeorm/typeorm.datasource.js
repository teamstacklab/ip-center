"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
const typeorm_1 = require("typeorm");
exports.dataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Renan#717",
    database: "ipecenter",
    entities: [
        'dist/**/*.entity.{js, ts}'
    ],
    migrations: [
        'dist/**/migrations/**/*.{js, ts}'
    ],
    migrationsTableName: "migrations",
    logger: 'file',
});
//# sourceMappingURL=typeorm.datasource.js.map