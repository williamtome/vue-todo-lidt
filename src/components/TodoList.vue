<template>
  <h1>Todos Não Realizadas:</h1>
  <div v-for="item in incompletedTodos" :key="item.id">
    {{ item.title }}
  </div>

  <br><br>

  <h1>Todos Realizadas:</h1>
  <div v-for="item in completedTodos" :key="item.id">
    {{ item.title }}
  </div>

  <br><br>

  <h1>Todos</h1>
  <div v-for="item in items" :key="item.id">
    <input type="checkbox" name="todo" v-model="item.completed">
    {{ item.title }}
  </div>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
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
  },
  computed: {
    incompletedTodos() {
      return this.items.filter(item => !item.completed)
    },
    completedTodos() {
      return this.items.filter(item => item.completed)
    }
  }
}
</script>

<style scoped>
  img {
    width: 100px;
  }
</style>