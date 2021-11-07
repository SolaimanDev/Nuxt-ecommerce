<template>
  <div>
    <Menu />
   
    
    <section class="mt-5">
      <div class="container">
        <div class="row">
          <div
            class="col-md-3 "
            v-for="product in products"
            :key="product.id"
          >
            <div class="card" style="width: 18rem;">
              <div class="image">
                 <img class="card-img-top" src="../../assets/image/phone.jpeg" alt="Card image cap"> 
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
                  <button type="button" class="btn btn-primary mr-auto p-2">
                    Details
                  </button>
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
  methods: {
    logout() {
      console.log("logout");
    },
   async searchWithApi(){
        
        const product_list = await this.$axios.$get(`/products/search/${this.searchValue}`);

        this.products = product_list;
        console.log(this.products);
    },
    cartNow(product){
      console.log(product)
      this.$store.commit('setCart',product)
    }
  },
  async mounted() {
    const product_list = await this.$axios.$get("/products");

    this.products = product_list;
    console.log(this.products);
  }
};
</script>
