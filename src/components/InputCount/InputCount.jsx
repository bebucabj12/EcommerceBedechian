import React from 'react'
import { Link } from 'react-router-dom'
import './inputCount.css'

export default function InputCount() {
    return (
        <>
            <Link to='/cart'>
                <button onClick={() => console.log('cart')} className="btn-small blue accent-2">Finalizar compra</button>
            </Link>
        </>
    )
}
