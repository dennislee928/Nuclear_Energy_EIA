<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/aeo">AEO</router-link></li>
      <li><router-link to="/ieo">IEO</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar' // 修改名稱以符合多字規則
}
</script>

<style scoped>
.navbar {
  background-color: #333;
  padding: 1rem;
}

.navbar ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
}

.navbar li {
  margin: 0;
}

.navbar a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.navbar a:hover {
  background-color: #555;
}
</style>
