<template>
  <header
      class="background"
      v-if="isAuthenticated"
  >
    <h1>Cabeçalho</h1>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      isAuthenticated: false
    }
  }
}
</script>

<style scoped>
  .background {
    background-color: #42b983;
  }
</style>