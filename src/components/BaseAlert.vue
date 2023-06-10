<template>
  <div :class="baseClass">
    <slot />
  </div>
</template>

<script>
export default {
  name: "BaseAlert",
  props: {
    variant: {
      type: String,
      default: ''
    },
    text: {
      type: String,
    }
  },
  computed: {
    baseClass() {
      return [
          'alert',
          this.variant ? `alert-${this.variant}` : ''
      ]
    }
  }
}
</script>

<style scoped>
.alert-success {
  background-color: #42b983;
  color: white;
  font-weight: bold;
  width: 500px;
  padding: 10px;
  border-radius: 10px;
  margin: 0 auto;
}
</style>