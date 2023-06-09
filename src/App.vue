<template>
  <TheHeader/>

  <h1>{{ fullName }}</h1>

  <div v-if="accessLevel === 'admin'">
    <p>Usuário Admin</p>
  </div>
  <div v-else-if="accessLevel === 'marketing'">
    <p>Usuário Marketing</p>
  </div>
  <div v-else>
    <p>Usuário Padrão</p>
  </div>

  <div>
    <p>Profissão: <input type="text" name="profession" v-model="profession"></p>
    <div>
      Minha profissão é {{profession}}
    </div>
  </div>

  <br><br>

  <TodoList/>

  <TheFooter/>
</template>

<script>
import TheHeader from "./components/TheHeader.vue"
import TheFooter from "./components/TheFooter.vue"
import TodoList from "./components/TodoList.vue"

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter,
    TodoList
  },
  data() {
    return {
      user: {
        name: 'William',
        last_name: 'Tomé'
      },
      name: "William",
      accessLevel: 'marketing',
      profession: '',
    }
  },
  computed: {
    fullName() {
      return `${this.user.name + ' ' + this.user.last_name}`
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
