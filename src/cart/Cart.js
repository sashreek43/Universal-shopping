import React, { useContext } from 'react'
import { PRODUCTS } from '../shop/products'
import { ShopContext } from '../ShopContext'
import { CartItem } from './CartItem'
import './cart.css'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate()
  const { cartItems, getTotalCartAmount } = useContext(ShopContext)
  const totalAmount = getTotalCartAmount();
  // console.log(cartItems);

  return (
    <div className="cart">
      <div>
        <h1 className='cartHeading'>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p className='subtotal'> Grand Total: Rs {totalAmount} </p>
          <button className='continueShop' onClick={() => navigate("/Shop")}> Continue Shopping </button>
        </div>
      ) : (
        <h1 className='emptyCart'> Your Shopping Cart is Empty...</h1>
      )}
    </div>
  )
}

export default Cart