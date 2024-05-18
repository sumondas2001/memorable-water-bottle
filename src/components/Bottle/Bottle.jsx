import PropTypes from 'prop-types'
import './Bottle.css'

const Bottle = ({ bottle, handelAddToCart }) => {

     // console.log(bottle)
     const { name, img, price, stock, ratingsCount, seller, quantity, shipping } = bottle;
     return (
          <div className="bottle">
               <img src={img} alt="" />
               <h2>name: {name}</h2>
               <h3>price: ${price}</h3>
               <h4>stock: {stock}</h4>
               <h4>shipping: {shipping}</h4>
               <button onClick={() => handelAddToCart(bottle)} className='bottle-btn'>By Now</button>
          </div>
     );
};

Bottle.propTypes = {
     bottle: PropTypes.object.isRequired
     handelAddToCart: PropTypes.func.isRequired
}

export default Bottle;