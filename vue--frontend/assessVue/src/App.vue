<template>
	<div class="app">
		<!-- Sidebar -->
		<sidebar />

		<!-- Content -->
		<router-view />
	</div>
</template>

<script setup>
  import sidebar from './components/sidebar.vue'
</script>

<style lang="scss">
:root {
	--primary: #4ade80;
	--primary-alt: #22c55e;
	--grey: #64748b;
	--dark: #1e293b;
	--dark-alt: #334155;
	--light: #f1f5f9;
	--sidebar-width: 300px;
}
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Fira sans', sans-serif;
}
body {
	background: var(--light);
}
button {
	cursor: pointer;
	appearance: none;
	border: none;
	outline: none;
	background: none;
}
.app {
	display: flex;
	main {
		flex: 1 1 0;
		padding: 2rem;
		@media (max-width: 1024px) {
			padding-left: 6rem;
		}
	}
}
</style>


<!-- <script setup>
import assessFormEmp from './components/assessFormEmp.vue'
import assessTableEmp from './components/assessTableEmp.vue'
import assessFormDept from './components/assessFormDept.vue'
import assessTableDept from './components/assessTableDept.vue'
</script>


<template>
    <div class="sidebar" style="width:25%">
  <h3 class="bar">Menu</h3>
  <a href="" class="w3-bar-item w3-button">Form Employee</a>
  <a href="#" class="w3-bar-item w3-button">Table Employee</a>
  <a href="#" class="w3-bar-item w3-button">Form Department</a>
  <a href="#" class="w3-bar-item w3-button">Table Department</a>
</div>
  <nav>
   <button><router-link to="/assessFormEmp">Employee Form</router-link></button> 
    <button><router-link to="/assessTableEmp">Table Employee</router-link></button>
    <button><router-link to="/assessFormDept">Department Form</router-link></button> 
    <button><router-link to="/assessTableDept">Table Department</router-link></button>


  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 50px;
  color: #2c3e50;
}

nav {
  padding: 150px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

#button {
  line-height: 12px;
  width: 18px;
  font-size: 8pt;
  font-family: tahoma;
  margin-top: 1px;
  margin-right: 2px;
}

</style>
 -->












