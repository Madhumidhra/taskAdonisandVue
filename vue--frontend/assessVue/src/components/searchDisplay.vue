
<template>
<h1>Displaying employees according to their department name</h1>
<label>Department Name</label>
<input type="text" placeholder=" enter the department name" >
<!-- <select v-model="departmentName">
 <option class="display" v-for="departmentname in selectDepartmentData" :key="departmentname.dept_name" :value="departmentname.dept_id">
   {{departmentname.dept_name}} 
</option> -->
<select class="form-control" :required="true" @change="changeLocation">
   <option :selected="true">Choose Province</option>
   <option v-for="option in dept_name" v-bind:value="option.id" >{{ option.name }}</option>
</select>
<!-- </select> -->
<tr v-for="(entry, i) in selectDepartmentname" :key="i">
        
         <td>{{ entry.dept_name }}</td>
     </tr>
</template>

<script>
import assessTableDept from './assessTableDept.vue'
export default {
  data:()=>{return{
  selectDepartmentname:null, 
    
    dept_name:"",
    
  }},

   async filterdisplay(){
     
     const data= await findOrFail(request.input("dept_name"))
     if(data==dept_name)
     {
        

   }
   else{
    console.log ('no recods found')
   }
}}



</script>
<!-- <style>
input[type=text], select ,option{
  width: -100%;
  padding: 12px 20px;
  margin: 20px 0;
  display: inline-block;
  border: 1px solid rgb(120, 20, 20);
  border-radius: 10px;
  box-sizing: border-box;
}

</style> -->

 