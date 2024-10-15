import { useId, useState } from "react"
import { useCart } from "../hooks/useCart"
import './Cart.css'
import { IconShoppingCart } from "./IconShoppingCar"

function CartItem({ image_url, name, price, quantity, changeQuantity, stock }) {

    const handleMinusQuantity = () => {
        changeQuantity(quantity - 1)
    }

    const handlePlusQuantity = () => {
        changeQuantity(quantity + 1)
    }

    return (
        <li>
            <img src={image_url} alt={name} />
            <div>
                <strong>{name}</strong> - ${price * quantity}
            </div>

            <footer>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={handlePlusQuantity} >+</button>
                <button onClick={handleMinusQuantity} >-</button>
                <p>Cantidad Disponible:  {stock - quantity}</p>
            </footer>
        </li>
    )
}

export function Cart() {
    const cartCheckboxId = useId()
    const { cart, clearCart, changeQuantity } = useCart()

    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <IconShoppingCart />
            </label>
            <input type="checkbox" id={cartCheckboxId} hidden />

            <aside className="cart" >
                <ul>
                    {cart.map(product => (
                        <CartItem
                            key={product.id}
                            changeQuantity={(newQuantity) => changeQuantity({ id: product.id, quantity: newQuantity, stock: product.stock })}
                            {...product}
                        />
                    ))}
                </ul>

                <button onClick={clearCart} >
                    Limpiar Carrito
                </button>
            </aside>
        </>
    )
}
