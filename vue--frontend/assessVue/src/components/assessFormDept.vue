 
 <template >
    <h1>DISPLAY</h1>
    <div>
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
        <label >departmentName:</label>
        <input type="text" placeholder="Enter your department Name " v-model="dept_name">
         <br>
       
        <button @click="insert()" >Submit</button>
        <br>
   
    </div>
  </template>
 <script>
import axios from "axios";
export default {
  data:()=>{return{
    departmentDetails:[],
    dept_id:"",
    dept_name:"",
    
  }},
  methods:{
     async insert()
    {
      let departmentDetails={dept_id:this.dept_id,dept_name:this.dept_name}
      console.log(departmentDetails)
      await axios.post('http://127.0.0.1:54659/assessDeptMigration/insertAssessDept', departmentDetails , {headers:{appKey:'LooiFdlsqyOlbOUS4hgtngle8v2_6CFl'}})
      alert("inserted successfully"),
      this.clearForm();
     
    },
    clearForm() {
      this.dept_id="";
      this.dept_name = "";
    }
}
  };
 
</script>
<style>
input[type=text], select {
  width: -100%;
  padding: 12px 20px;
  margin: 20px 0;
  display: inline-block;
  border: 1px solid rgb(120, 20, 20);
  border-radius: 10px;
  box-sizing: border-box;
}

input[type=submit] {
  width: -100%;
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
  border-radius: 5px;
  background-color: rgb(138, 133, 133);
  padding: 50px;
}


</style>