<template>
  <div>
    <Menu />

    <section class="mt-5">
      <div class="container">
        <div class="row">
            <div class="col-md-3 ">
                <div class="card" style="width: 18rem;">
                  <div class="image">
                     <img class="card-img-top" src="../../assets/image/phone.jpeg" alt="Card image cap"> 
                  </div>
                    <div class="card-body">
                      <h5 class="card-title">{{slug.name}}</h5>
                      <h3 class="card-title">{{slug.price}}</h3>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div class="card-body">
                      <div class="d-flex">
                        <button type="button" class="btn btn-primary mr-auto p-2">Details</button>
                        <button type="button" class="btn btn-outline-primary mr-auto p-2">Order</button>
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
export default{
  async asyncData ({ params,$axios }) {
    const product_list = await $axios.$get("/products/"+params.product);
    const slug = product_list
    console.log(slug)
    return {
      slug
    }
  },
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.product)
  },
  data(){
    return {
        // slug:this.$route.params,
        sproduct:[]
    }
  },
  






}
</script>
