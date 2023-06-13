<template>
  <div
      v-if="inCart"
      class="card"
  >
    {{ product.name }} - R$ {{ product.price }}
    <button @click="addCart()">Add Cart</button>
    <button @click="removeProduct()">Remove product</button>
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  props: {
    product: Object,
  },
  data() {
    return {
      inCart: true,
    }
  },
  methods: {
    addCart() {
      this.$store.commit('saveProductInCart', this.product)
    },
    removeProduct() {
      this.$store.commit('removeProduct', this.product.id)
    }
  }
}
</script>

<style scoped>
  .card {
    margin: 10px auto;
    padding: 10px;
    background-color: burlywood;
    color: black;
    border-radius: 15px;
    text-align: center;
  }
</style>