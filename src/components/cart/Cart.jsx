import PropTypes from 'prop-types'

const Cart = ({ cart }) => {
     return (
          <div>
               <h3>Bottle Hear: {cart.length}</h3>
               <div>
                    {
                         cart.map(bottle => <li key={bottle.id}>  {bottle.name}</li>)
                    }
               </div>
          </div >
     );
};
Cart.propTypes = {
     cart: PropTypes.array.isRequired
}

export default Cart;