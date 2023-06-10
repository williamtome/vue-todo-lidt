<template>
<!--  <TheHeader>-->
<!--    <template v-slot:title>-->
<!--      <h1>Home</h1>-->
<!--    </template>-->
<!--    <template v-slot:description>-->
<!--      <p>Descrição</p>-->
<!--    </template>-->
<!--    Conteudo TRUE! Me dê papai!!!-->
<!--  </TheHeader>-->

  <BaseAlert
      v-if="showAlert"
      :variant="variant"
      @close="onClose()"
  >
    Dados cadastrados com sucesso.
  </BaseAlert>

<!--  <BaseCard/>-->

<!--  <h1>{{ fullName }}</h1>-->

<!--  <div v-if="accessLevel === 'admin'">-->
<!--    <p>Usuário Admin</p>-->
<!--  </div>-->
<!--  <div v-else-if="accessLevel === 'marketing'">-->
<!--    <p>Usuário Marketing</p>-->
<!--  </div>-->
<!--  <div v-else>-->
<!--    <p>Usuário Padrão</p>-->
<!--  </div>-->

<!--  <div>-->
<!--    <p>Profissão: <input type="text" name="profession" v-model="profession"></p>-->
<!--    <div>-->
<!--      Minha profissão é {{professionUpperCase}}-->
<!--    </div>-->
<!--  </div>-->

<!--  <br><br>-->

<!--  <TheFooter/>-->
</template>

<script>
// import TheHeader from "./components/TheHeader.vue"
// import TheFooter from "./components/TheFooter.vue"
// import BaseCard from "./components/BaseCard.vue"
import BaseAlert from "./components/BaseAlert.vue"

export default {
  name: 'App',
  components: {
    // BaseCard,
    // TheHeader,
    // TheFooter,
    BaseAlert,
  },
  data() {
    return {
      variant: 'success',
      showAlert: true,
      user: {
        name: 'William',
        last_name: 'Tomé'
      },
      name: "William",
      accessLevel: 'marketing',
      profession: '',
      professionUpperCase: ''
    }
  },
  watch: {
    profession(newValue) {
      this.professionUpperCase = newValue.toUpperCase()
    }
  },
  computed: {
    fullName() {
      return `${this.user.name + ' ' + this.user.last_name}`
    },
  },
  methods: {
    onClose() {
      this.showAlert = false
      console.log('on close')
    }
  },
  beforeCreate() {
    console.log('beforeCreate')
    console.log('Estado: ' + this.name)
    console.log('DOM: ' + this.$el)
  },
  created() {
    console.log('created')
    console.log('Estado: ' + this.name)
    console.log('DOM: ' + this.$el)
  },
  beforeMount() {
    console.log('beforeMount')
    console.log('Estado: ' + this.name)
    console.log('DOM: ' + this.$el)
  },
  mounted() {
    console.log('Mounted')
    console.log('Estado: ' + this.name)
    console.log('DOM: ' + this.$el)
  },
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
