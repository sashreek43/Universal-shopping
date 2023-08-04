import React, { useContext } from 'react'
import { PRODUCTS } from './products'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../UserContext'
import './shop.css'
import { ShopContext } from '../ShopContext'

export default function Shop() {
  const { user } = useContext(UserContext)
  const navigate = useNavigate()

  const { addToCart, cartItems, removeFromCart, updateCartItemCount } = useContext(ShopContext)

  const products = PRODUCTS.map(product => {
    return (
      user ?
        <div key={product.id} className="product">
          <Link to={`/Shop/${product.id}`}><img src={product.productImage} className="pr_img" /></Link>
          <div className="description">
            <p><b>{product.productName}</b></p>
            <p>Rs {product.price}</p>
          </div>
          {cartItems[product.id] < 1 ? <button className="addToCart" onClick={() => addToCart(product.id)}>Add to cart{cartItems[product.id] > 0 && <>({cartItems[product.id]})</>}</button> : <div className="countHandler">
            <button onClick={() => removeFromCart(product.id)}> - </button>
            <input
              value={cartItems[product.id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), product.id)}
            />
            <button onClick={() => addToCart(product.id)}> + </button>
          </div>}
        </div> : navigate('/Login')
    )
  })

  return (
    <div className='shop_prod'>
      {products}
    </div>
  )
}
