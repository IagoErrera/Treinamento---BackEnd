// import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

// export default class CreateForgetKeys1645412361120 implements MigrationInterface {
//   public async up(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.createForeignKey(
//       'pius',
//       new TableForeignKey({
//         name: 'PiuUser',
//         columnNames: ['user_id'],
//         referencedColumnNames: ['id'],
//         referencedTableName: 'users',
//         onDelete: 'SET NULL',
//         onUpdate: 'CASCADE',
//       }),
//     );

//     await queryRunner.createForeignKey(
//       'users',
//       new TableForeignKey({
//         name: 'Pius',
//         columnNames: ['id'],
//         referencedColumnNames: ['user_id'],
//         referencedTableName: 'pius',
//         onDelete: 'SET NULL',
//         onUpdate: 'CASCADE',
//       }),
//     );
//   }

//   public async down(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.dropForeignKey('pius', 'PiuUser');
//     await queryRunner.dropForeignKey('users', 'Pius');
//   }
// }
