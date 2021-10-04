import React from 'react'
import { useCartContext } from '../../Context/cartContext'

export default function CartDetail() {
    const { cartList, clear, removeItem, totalPrice } = useCartContext()

    return (
        <div>
            {
            cartList.map(res =>
                <div class="col s12 m7">                                   
                    <div class="card horizontal">
                        <div class="card-image">                                        
                            <img src={res.item.item.pictureUrl} alt='foto producto'/>
                        </div>
                        <div class="card-stacked">
                            <div class="card-content">
                                <h3 class="header">{res.item.item.title}</h3>
                                <p><strong>{res.item.item.descripcion}</strong></p>
                                <p><strong>Cantidad: {res.item.quantity}</strong></p>
                                <h4>Total: ${res.item.item.price * res.item.quantity} </h4>
                            </div>
                            <div class="card-action">
                                <button className="btn-small deep-orange accent-1" onClick={() => removeItem(res.item.item.id)}>Quitar del carrito</button>
                            </div>
                        </div>
                    </div>
                </div>)                            
            }
                <button className="btn-small pink lighten-2" onClick={() => clear()}>Vaciar carrito</button>
                <div className='row'>
                    <h2>Total: $ {totalPrice()} </h2>
                    <button className="btn-small pink lighten-2">Ir a pagar</button>
                </div>
        </div>
    )
}
