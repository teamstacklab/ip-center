"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserSchema1681159985776 = void 0;
const typeorm_1 = require("typeorm");
class CreateUserSchema1681159985776 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "User",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: "uuid",
                    default: "uuid_generate_v4"
                },
                {
                    name: "name",
                    type: "varchar(200)"
                },
                {
                    name: "username",
                    type: "varchar(150)"
                },
                {
                    name: "password",
                    type: "varchar(100)"
                },
                {
                    name: "email",
                    type: "varchar(200)"
                },
                {
                    name: "isAdmin",
                    type: "boolean"
                },
            ]
        }));
    }
    async down(queryRunner) {
    }
}
exports.CreateUserSchema1681159985776 = CreateUserSchema1681159985776;
//# sourceMappingURL=1681159985776-CreateUserSchema.js.map