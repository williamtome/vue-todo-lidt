<template>
  <h2>{{ user.first_name }}</h2>
  <h2>{{ user.last_name }}</h2>
  <h2>Nome Completo: {{ fullName }}</h2>
  <button @click="user.first_name = 'Sansa'">Atualizar nomes</button>
  <br><br>
  <h1>Minha lista de tarefas</h1>
  <button @click="showOrHideList">
    {{ state.showList ? 'Ocultar lista' : 'Ver Lista' }}
  </button>
  <input
      type="text"
      v-focus
      @keyup.enter="addTask"
      v-model="state.currentTask">

  <ul v-if="state.showList">
    <li
        v-for="(task, index) in state.tasks"
        :key="index"
        @dblclick="complete(task)"
        class="task-item"
        :class="{ 'line-through': task.isDone }"
    >
      <p>
        {{ task.name }} - Finalizado: {{ task.isDone ? 'Sim' : 'Não' }}
        <button @click="remove(task)">&times;</button>
      </p>
    </li>
  </ul>
</template>

<script>
// sintaxe Vue 3:
import {ref, computed} from "vue";

export default {
  directives: {focus},
  name: 'App',
  setup() {
    const user = ref({
      first_name: 'Jon',
      last_name: 'Snow'
    })
    const fullName = computed(() => `${user.value.first_name} ${user.value.last_name}`)

    // const changeName = () => {
    //   user.value.first_name = "Luke"
    //   user.value.last_name = 'Skywalker'
    // }


    const state = ref({
      currentTask: '',
      showList: false,
      tasks: [
        {name: 'Fazer o curso', isDone: false},
      ],
    })

    function showOrHideList() {
      state.value.showList = !state.value.showList
    }

    function remove(task) {
      state.value.tasks = state.value.tasks.filter((value) => value.name !== task.name, {deep: true})
    }

    function complete(task) {
      state.value.tasks = state.value.tasks.map(t => {
        return (t.name === task.name)
            ? {name: t.name, isDone: !t.isDone}
            : {...t}
      })
    }

    function addTask() {
      state.value.tasks.push({name: state.value.currentTask, isDone: false})
      state.value.currentTask = ''
    }

    return {
      user,
      fullName,
      // changeName,
      state,
      showOrHideList,
      addTask,
      remove,
      complete,
    }
  },
  mounted() {
    setTimeout(() => {
      console.log('Foi montado!')
    }, 2000)
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

.line-through {
  text-decoration: line-through;
}

.task-item {
  cursor: pointer
}
</style>
