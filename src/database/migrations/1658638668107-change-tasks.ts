import { MigrationInterface, QueryRunner } from 'typeorm'

export class changeTasks1658638668107 implements MigrationInterface {
    name = 'changeTasks1658638668107'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task"
            ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`)
        await queryRunner.query(`ALTER TABLE "task"
            ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "task"
            DROP COLUMN "updated_at"`)
        await queryRunner.query(`ALTER TABLE "task"
            DROP COLUMN "created_at"`)
    }
}
