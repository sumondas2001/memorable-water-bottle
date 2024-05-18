import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLocalStorage, getStoredCart } from "../../utilities/LocalStorage";
import Cart from "../cart/Cart";

const Bottles = () => {

     const [bottles, setBottles] = useState([]);
     const [cart, setCart] = useState([]);
     useEffect(() => {
          fetch('bottles.json')
               .then(res => res.json())
               .then(data => setBottles(data))
     }, [])
     useEffect(() => {
          if (bottles.length > 0) {
               const storedCart = getStoredCart();
               const sevedCart = [];
               for (const id of storedCart) {
                    const bottle = bottles.find(bottle => bottle.id === id)
                    if (bottle) {
                         sevedCart.push(bottle)
                    }
               }

               setCart(sevedCart)
          }
     }, [bottles])

     const handelAddToCart = bottle => {
          const newCart = [...cart, bottle];
          setCart(newCart);
          addToLocalStorage(bottle.id)
     }
     return (
          <div>
               <h2>Bottles Here: {bottles.length}</h2>
               <Cart cart={cart}></Cart>

               <div className="bottles-continner">
                    {
                         bottles.map(bottle => <Bottle handelAddToCart={handelAddToCart} key={bottle.id} bottle={bottle}></Bottle>)

                    }
               </div>
          </div>
     );
};


export default Bottles;