import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../Context/cartContext'

export default function Cart() {
    const { cartList, clear } = useCartContext()

    console.log('cartList en dond yo quiero', cartList)
    return (
        <div>
            {
                cartList.length === 0 ?
                <div>
                    <h3>Aún no ha seleccionado ningun producto.</h3>
                    <Link to='/'>
                        <botton>Ir a comprar</botton>
                    </Link>
                </div>
                :
                <div>
                    {cartList.map(res => <h2>{res.item.title}</h2>)}
                    <button onClick={() => clear()}>Vaciar carrito</button>
                </div>
            }
        </div>
    )
}