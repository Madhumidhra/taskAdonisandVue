//import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';
import assess_emps_migration from 'App/Models/assessEmp';
import EmployeeValidator from 'App/Validators/EmployeeValidator';
export default class AssessEmpsController {
     public async selectAssessEmp()
     {
       return await assess_emps_migration.all();
     }

     public async insertAssessEmp({request}){
      await request.validate(EmployeeValidator)
        try{
              const addEmp=new assess_emps_migration();
              addEmp.empId=request.input('emp_id')
              addEmp.empName=request.input('emp_name')
              addEmp.phoneNum=request.input('phone_num')
              addEmp.deptId=request.input('dept_id')
               await addEmp.save()
               return(' Successfully Inserted !');
        }
        catch{
            return("already exists")
        }
     }
    public async updateAssessEmp({request})
    {
        try
    {
        const updateEmp = await assess_emps_migration.findOrFail(request.input('emp_id'))
        updateEmp.empName=request.input('emp_name')
        updateEmp.phoneNum=request.input('phone_num')
        updateEmp.deptId=request.input('dept_id')
        await updateEmp.save()
        return updateEmp
        }
        catch
        {
            return("Already exits ")
        }
    }

    public async deleteAssessEmp({request})
    {
        try
        {
            (await assess_emps_migration.findOrFail(request.input('emp_id'))).delete();
            return("successfully deleted")
        }
        catch
        {
            return("Already deleted ")
        }
    }

public async joins ()
    {
            const fetchData =  await Database
                            .from('assess_emps_migration')
                            .join('assess_dept_migration', 'assess_emps_migration.dept_id', '=', 'assess_dept_migration.dept_id')
                            .select('assess_emps_migration.emp_id')
                            .select('assess_emps_migration.emp_name')
                            .select('assess_emps_migration.phone_num')
                            .select('assess_dept_migration.dept_name')
            if(fetchData[0])
            {
                return fetchData;
            }
            else{
                return "No data to show"
            }
    }


    }





