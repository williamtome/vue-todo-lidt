<template>
  <h1>Minha lista de tarefas</h1>
  <h2>User: {{ user.name }}</h2>
  <h2>Admin: {{ admin.name }}</h2>
  <button @click="showOrHideList; changeName()">
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
// sintaxe vue 2:
/*
const focus = {
  inserted: (el) => el.focus()
}
export default {
  directives: {focus},
  name: 'App',
  data() {
    return {
      currentTask: '',
      showList: false,
      tasks: [
        {name: 'Fazer o curso', isDone: false},
      ],
    }
  },
  methods: {
    showOrHideList() {
      this.showList = !this.showList
    },
    remove(task) {
      this.tasks = this.tasks.filter((value) => value.name !== task.name)
    },
    complete(task) {
      this.tasks = this.tasks.map(t => {
        return (t.name === task.name)
            ? {name: t.name, isDone: !t.isDone}
            : {...t}
      })
    },
    addTask() {
      this.tasks.push({name: this.currentTask, isDone: false})
      this.currentTask = ''
    },
  },
}
*/
// sintaxe Vue 3:
import {reactive, ref} from "vue";

export default {
  directives: {focus},
  name: 'App',
  setup() {
    const user = reactive({
      name: 'Jon Snow'
    })

    const admin = ref({
      name: 'Luke Skywalker'
    })

    const changeName = () => {
      user.name = "Luke Skywalker"
      admin.value.name = 'Jon Snow'
    }
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
      state.value.tasks = state.value.tasks.filter((value) => value.name !== task.name)
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
      admin,
      changeName,
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
