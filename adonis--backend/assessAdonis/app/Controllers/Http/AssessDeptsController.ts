// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import assess_dept_migration from "App/Models/assessDept";
import DepartmentValidator from "App/Validators/DepartmentValidator";
export default class AssessDeptsController {
        //select department and list all data from the database
        public async selectAssessDept()
        {
          return await assess_dept_migration.all();

        }

        public async insertAssessDept({request}) 
        {
            //const result=await request.validate(DeptValidator){
                console.log(request.body())
            await request.validate(DepartmentValidator)
            
            try{
            const add = new assess_dept_migration()
            add.deptId= request.input('dept_id')
            add.deptName = request.input('dept_name')
            await add.save()
            return(' Successfully Inserted !');
        }catch{
                return("Incorrect Values already exists department id")
            }}


        public async updateAssessDept({request})
        {
        try
        {
        
            const update = await assess_dept_migration.findOrFail(request.input('dept_id'))
            update.deptName =  request.input('dept_name')
            await update.save()
            return update
        }
        catch{return("Already exits  department id cannot be updated ")
        }
        }
        public async deleteAssessDept({request}){
            try{
               (await assess_dept_migration.findOrFail(request.input('dept_id'))).delete();
            }
            catch{return("already deleted")
        }

}
}