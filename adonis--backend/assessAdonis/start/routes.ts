/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

  Route.group(() => {
  Route.get('selectAssessDept','AssessDeptsController.selectAssessDept')
  Route.post('insertAssessDept','AssessDeptsController.insertAssessDept')
  Route.patch('updateAssessDept','AssessDeptsController.updateAssessDept')
  Route.delete('deleteAssessDept','AssessDeptsController.deleteAssessDept')
  }).prefix('assessDeptMigration').middleware('Auth')
  Route.group(() => {
    Route.get('selectAssessEmp','AssessEmpsController.selectAssessEmp')
    Route.post('insertAssessEmp','AssessEmpsController.insertAssessEmp')
    Route.patch('updateAssessEmp','AssessEmpsController.updateAssessEmp')
    Route.delete('deleteAssessEmp','AssessEmpsController.deleteAssessEmp')
    Route.get('joins','AssessEmpsController.joins')
    }).prefix('assessEmpsMigration').middleware('Auth')
  

  // Route.group(() => {
  //   Route.get('selectEmp','empsController.selectEmp')
  //   Route.post('insertEmp','empsController.insertEmp')
  //   Route.put('/','empsController.updateEmp')
  //   Route.delete('/deleteEmp','empsController.deleteEmp')
  //   Route.get('join','empsController.join')
  // }).prefix('employeeMigrations')
 
