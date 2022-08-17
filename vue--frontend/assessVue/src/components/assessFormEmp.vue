<template >
<div>
    <h1>  EMPLOYEE DISPLAY</h1>
       
        <label >employeeId:</label>
        <input type="number" placeholder="Enter your Employee Id " v-model="emp_id">
         <br>
        <label >employeeName:</label>
        <input type="text" placeholder="Enter your Employee Name " v-model="emp_name">
         <br>
        <label >phoneNo:</label>
        <input type="text" placeholder="Enter your Phone No"  minlength="10" v-model="phone_num">
        <br>
        <label >departmentId:</label>
        <select v-model="dept_id">
        <option value = "101" > 101 </option>  
        <option value = "102"> 102</option>
        <option value = "103"> 103</option>  
        <option value = "104"> 104</option>
        <option value = "105"> 105</option>
        <option value = "106"> 106</option>
        <option value = "107"> 107</option>
        <option value = "108"> 108</option>
        <option value = "109"> 109</option>
        <option value = "110"> 110</option>
         <option value = "111"> 111</option>

        </select>  
        <br>
        <button @click="insert()" >Submit </button>
        <br>
        </div>
  </template> 
 <script>
import axios from "axios";
export default {
  data:()=>{return{
    empDetails:[],
    emp_id:"",
    emp_name:"",
    phone_num:"",
    dept_id:""
  }},
  methods:{
     async insert()
    {
      
      let empDetails={emp_id:this.emp_id,emp_name:this.emp_name,phone_num: this.phone_num,dept_id:this.dept_id}
      console.log(empDetails)
      await axios.post('http://127.0.0.1:54659/assessEmpsMigration/insertAssessEmp', empDetails , {headers:{appKey:'LooiFdlsqyOlbOUS4hgtngle8v2_6CFl'}})
      alert("inserted successfully")
      this.clearForm();
      
      // catch{
      //   alert("cant be inserted")
      // }

    },
   clearForm() {
      this.emp_id="";
      this.emp_name = "";
      this.phone_num="";
      this.dept_id="";
    }

}
  };
</script>
<style>
input[type=text], select {
  width: -50%;
  padding: 12px 20px;
  margin: 70px 20px;
  display: inline-block;
  border: 1px solid rgb(120, 20, 20);
  border-radius: 10px;
  box-sizing: border-box;
}
 input[type=number] {
  width: -50%;
  padding: 12px 20px;
  margin: 20px 0;
  display: inline-block;
  border: 1px solid rgb(120, 20, 20);
  border-radius: 10px;
  box-sizing: border-box;
}

input[type=submit] {
  width: -50%;
  background-color: #118b15;
  
  padding: 50px 30px;
  margin: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* input[type=submit]:hover {
  background-color: #45a049;
} */

div {
  border-radius: 25px;
  background-color: rgb(138, 133, 133);
  
  padding: 12px 20px;
}
</style>