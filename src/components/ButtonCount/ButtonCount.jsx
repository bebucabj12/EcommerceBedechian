import React from 'react'
import { cartContext, useCartContext } from '../../Context/cartContext'

export default function ButtonCount({handleInter, producto}) {

    //Hago destructuring del contexto
    // const { agregarItem } = useCartContext(cartContext)

    //Función que agrega item al carrito y cambia el boton
    const handleAddAndInter = () => {
        // agregarItem(producto)
        handleInter()
    }

    return (
        <>
            <button onClick={handleAddAndInter} className="btn-small pink lighten-2">Añadir al carrito</button>
        </>
    )
}
