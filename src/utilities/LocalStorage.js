const getStoredCart = () => {
     const storedCartString = localStorage.getItem('cart');
     if (storedCartString) {
          return JSON.parse(storedCartString)
     } else {
          return []
     }
}
const saveCartLs = cart => {
     const cartStringifed = JSON.stringify(cart);
     localStorage.setItem('cart', cartStringifed);
}
const addToLocalStorage = id => {
     const cart = getStoredCart();
     cart.push(id);
     saveCartLs(cart)
}
export { addToLocalStorage, getStoredCart }