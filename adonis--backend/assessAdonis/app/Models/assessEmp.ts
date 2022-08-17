
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class assessEmpsMigration extends BaseModel {
  @column({isPrimary:true})
  public empId: number
  @column()
  public empName: string
  @column()
  public phoneNum: bigint
  @column()
  public deptId: number
  

  
}
