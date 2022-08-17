import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'assess_dept_migration'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('dept_id')
      table.string('dept_name')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
