<template>
  <header class="header">
    <div v-if="$slots.title" class="title">
      <slot name="title"></slot>
    </div>
    <div class="description">
      <slot name="description"></slot>
    </div>
    <div class="content">
      <slot/>
    </div>
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