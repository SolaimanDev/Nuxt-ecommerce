<template>
  <div>
    <Menu />

    <section class="mt-5">
      <div class="container">
        <ol class="list-group list-group-numbered">
          <li  v-for="product in products"
            :key="product.id" class="list-group-item">{{product.name}}</li>

        </ol>
        <br>
       <button
      @click="orderPlace"
      class="btn btn-outline-primary"
      type="submit"
    >
      Place Order
    </button>
      </div>
    </section>
  </div>
</template>
<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");
</style>
<script>
export default {
  data() {
    return {
      products: [],
     
    };
  },
  methods: {
    logout() {
      console.log("logout");
    },
    async searchWithApi() {
      const product_list = await this.$axios.$get(
        `/products/search/${this.searchValue}`
      );

      this.products = product_list;
      console.log(this.products);
    },
    cartNow(product) {
      console.log(product);
      this.$store.commit("setCart", product);
    },
    async orderPlace(){
        
       await this.$axios.$post('/product-order',{
            cart:this.$store.state.cart
        })
        
        //   this.$store.commit("setCartEmpty");

    }
  },
  async mounted() {
    const product_list = await this.$store.state.cart
    this.products = product_list
  }
};
</script>
