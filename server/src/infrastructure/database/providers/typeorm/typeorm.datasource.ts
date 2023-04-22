import { DataSource } from "typeorm";


export const dataSource: DataSource = new DataSource({
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