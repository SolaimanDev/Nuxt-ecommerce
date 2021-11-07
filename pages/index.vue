<template>
  <div>
    <Menu />
    <!-- search box -->
    <br>
    <div class="row" >
      <div class="col-md-4" >
      </div>
      <div class="col-md-3" >

            <input
      class="form-control me-2"
      type="search"
      placeholder="Search Product"
      aria-label="Search"
      v-model="searchValue"
    />
      </div>
      <div class="col-md-3" >

    <button
      @click="searchWithApi"
      class="btn btn-outline-success"
      type="submit"
    >
      Search
    </button>
      </div>


    </div>
    <!-- search box -->

    <section class="mt-5">
      <div class="container">
        <div class="row">
          <div
            class="col-md-3 "
            v-for="(product, index) in products"
            :key="index"
          >
            <div class="card" style="width: 18rem;">
              <div class="image">
                <img
                  class="card-img-top"
                  src="../assets/image/phone.jpeg"
                  alt="Card image cap"
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div class="card-body">
                <div class="d-flex">
                <NuxtLink class="mr-auto" :to="`products/${product.id}`">
                  <button type="button" class="btn btn-primary mr-auto p-2">
                    Details
                  </button>
                </NuxtLink>
                
                  <button
                    type="button"
                    class="btn btn-outline-primary mr-auto p-2"
                     @click="cartNow(product)"
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      searchValue:""

    };
  },
  async fetch() {
    const product_list = await this.$axios.$get("/products");
    this.products = product_list;
    console.log(this.products);
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
    }
  }
};
</script>
