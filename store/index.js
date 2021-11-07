export const state = () => ({
    cart:[]
})

export const mutations = {
    setCart (state, cart) {
        state.cart.push(cart)
      },
      setCartEmpty(state){
          state.cart = []
      }
}
