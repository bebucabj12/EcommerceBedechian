import React from 'react'
import { useCartContext } from '../../Context/cartContext'

export default function Cart() {
    const { cartList } = useCartContext()

    return (
        <div>            
            {cartList.map(res => <h2>{res.title}</h2>)}
        </div>
    )
}