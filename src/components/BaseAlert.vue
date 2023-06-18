<template>
  <div :class="baseClass">
    <slot/>

    <div>
      <button @click.prevent="onclick()">X</button>
    </div>
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
  methods: {
    onclick() {
      this.$emit('close')
      console.log('clicou')
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
.alert {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;
}

.alert-success {
  background-color: #42b983;
  color: white;
  font-weight: bold;
  width: 500px;
  margin: 0 auto;
}
</style>