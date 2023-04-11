import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUserSchema1681159985776 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
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
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
