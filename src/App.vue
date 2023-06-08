<template>
  <TheHeader/>

  <h1>{{ name }}</h1>

  <div v-if="accessLevel === 'admin'">
    <p>Usuário Admin</p>
  </div>
  <div v-else-if="accessLevel === 'marketing'">
    <p>Usuário Marketing</p>
  </div>
  <div v-else>
    <p>Usuário Padrão</p>
  </div>


  <div
      class="bg-item"
      v-for="item in items"
      :key="item.id"
  >
    {{ item.title }}
  </div>

  <TheFooter/>
</template>

<script>
import TheHeader from "./components/TheHeader.vue"
import TheFooter from "./components/TheFooter.vue"

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  },
  data() {
    return {
      name: "William",
      accessLevel: 'marketing',
      items: [
        {
          'id': 1,
          'userId': 1,
          'title': 'Comprar carne',
          'completed': true
        },
        {
          'id': 2,
          'userId': 1,
          'title': 'Fazer comida',
          'completed': false
        },
        {
          'id': 3,
          'userId': 1,
          'title': 'Dar ração para os cães',
          'completed': false
        },
      ]
    }
  }
}
</script>

<style>
.bg-item {
  background-color: black;
  color: white;
  padding: 15px 0;
  margin: 5px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
