<template>
  <div>
    <ProductDetail
        v-for="product in $store.state.products"
        :key="product.id"
        :product="product"
    />

    <br><br>
    <pre>
      {{ $store.state.cart }}
    </pre>
  </div>
</template>

<script>
import ProductDetail from "@/components/Products/ProductDetail";
export default {
  name: "ProductsAll",
  components: {ProductDetail},
}
</script>

<style scoped>

</style>