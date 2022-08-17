
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class assessDeptMigration extends BaseModel {
  @column({ isPrimary: true })
  public deptId: number
  @column()
  public deptName: string

  
}
