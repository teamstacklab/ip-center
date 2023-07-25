import { MigrationInterface, QueryRunner } from 'typeorm';
import { EncryptionService } from 'services/Encription.service';
import { config } from 'dotenv';

config();

export class CreateSuperUser1690292861227 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        INSERT INTO users(
            name,
            username,
            email,
            password,
            whatsapp,
            "isAdmin"
        ) VALUES (
            'Admin',
            'admin',
            'teamstacklab@gmail.com',
            '${await new EncryptionService().hash(process.env.SU_PASS)}',
            '0000000000',
            true
        );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DELETE FROM users WHERE username='admin';
    `);
  }
}
