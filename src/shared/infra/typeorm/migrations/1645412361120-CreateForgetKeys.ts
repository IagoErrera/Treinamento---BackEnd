import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class CreateForgetKeys1645412361120 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'pius',
      new TableForeignKey({
        name: 'UserOfPiu',
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('pius', 'UserOfPiu');
  }
}
