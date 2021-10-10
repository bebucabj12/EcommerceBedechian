import React from 'react'

export default function ButtonCount( {onAdd} ) {

    return (
        <>
            <button onClick={() => onAdd()} className="btn-small pink lighten-2">Añadir al carrito</button>
        </>
    )
}
