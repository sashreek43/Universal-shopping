import React, {useContext} from 'react'
import { useParams } from 'react-router-dom'
import { PRODUCTS } from './products'
import { ShopContext } from '../ShopContext'
import './prodDetails.css'

function ProductDetail() {
    const { id: productid } = useParams();
    const { addToCart, cartItems, removeFromCart, updateCartItemCount } = useContext(ShopContext)

    const prod = PRODUCTS.find(prod => {
        return prod.id == productid
    })

    return (
        <div className="product-details-container">
            <img src={prod.productImage} alt="Product" />
            <div className="product-details">
                <h2>{prod.productName}</h2>
                <p>Rs {prod.price}</p>
                <p>{prod.details}</p>
                {cartItems[prod.id] < 1 ? <button className="addToCart" onClick={() => addToCart(prod.id)}>Add to cart{cartItems[prod.id] > 0 && <>({cartItems[prod.id]})</>}</button> : <div className="countHandler">
                    <button onClick={() => removeFromCart(prod.id)}> - </button>
                    <input
                        value={cartItems[prod.id]}
                        onChange={(e) => updateCartItemCount(Number(e.target.value), prod.id)}
                    />
                    <button onClick={() => addToCart(prod.id)}> + </button>
                </div>}
            </div>
        </div>
    )
}

export default ProductDetail