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

  <div>
    <p>Profissão: <input type="text" name="profession" v-model="profession"></p>
    <div>
      Minha profissão é {{profession}}
    </div>
  </div>

  <div
      class="bg-item"
      v-for="item in items"
      :key="item.id"
  >
    <img
        v-if="item.image"
        :src="item.image"
        :alt="item.alt"
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
      profession: '',
      items: [
        {
          'id': 1,
          'userId': 1,
          'title': 'Comprar carne',
          'completed': true,
          'image': 'https://upload.wikimedia.org/wikipedia/pt/9/9b/Avengers_Endgame.jpg',
          'alt': 'Imagem de Fulano'
        },
        {
          'id': 2,
          'userId': 1,
          'title': 'Fazer comida',
          'completed': false,
          'image': 'https://upload.wikimedia.org/wikipedia/pt/9/9b/Avengers_Endgame.jpg',
          'alt': 'Imagem de Cicrano'
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
img {
  width: 100px;
}
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
