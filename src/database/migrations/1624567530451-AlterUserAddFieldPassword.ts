import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterUserAddFieldPassword1624567530451
  implements MigrationInterface
{
  private column = new TableColumn({
    name: 'password',
    type: 'varchar',
    isNullable: true,
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('users', this.column);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', this.column);
  }
}
