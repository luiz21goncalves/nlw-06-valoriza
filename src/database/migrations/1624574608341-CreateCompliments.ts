import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCompliments1624574608341 implements MigrationInterface {
  private table = new Table({
    name: 'compliments',
    columns: [
      {
        name: 'id',
        type: 'varchar',
        isPrimary: true,
      },
      {
        name: 'user_sender',
        type: 'varchar',
        isNullable: true,
      },
      {
        name: 'user_receiver',
        type: 'varchar',
        isNullable: true,
      },
      {
        name: 'tag_id',
        type: 'varchar',
        isNullable: true,
      },
      {
        name: 'message',
        type: 'varchar',
      },
      {
        name: 'created_at',
        type: 'timestamp',
        default: 'now()',
      },
    ],
    foreignKeys: [
      {
        name: 'FKUserSenderCompliments',
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
        columnNames: ['user_sender'],
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      {
        name: 'FKUserReceiverCompliments',
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
        columnNames: ['user_receiver'],
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      {
        name: 'FKTagCompliments',
        referencedTableName: 'tags',
        referencedColumnNames: ['id'],
        columnNames: ['tag_id'],
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
