import BaseSchema from '@ioc:Adonis/Lucid/Schema'


export default class extends BaseSchema {
  protected tableName = 'assess_emps_migration'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('emp_id')
      table.string('emp_name')
      table.bigint('phone_num')
      table.integer('dept_id')
      .references('assessDeptsMigration')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
