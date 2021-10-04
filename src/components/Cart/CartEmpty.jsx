import React from 'react'
import { Link } from 'react-router-dom'

export default function CartEmpty() {
    return (
        <div className='cart'>
            <div class="row">
                    <div class="col s12 m6">
                            <div class="card deep-orange accent-1">
                                <div class="card-content white-text">
                                    <span class="card-title">Su carrito</span>
                                    <p>Aún no ha seleccionado ningun producto.</p>
                                </div>
                                <div class="card-action">
                                    <Link to='/'>
                                        <botton className="btn-small center pink lighten-2">Ir a comprar</botton>
                                    </Link>
                                </div>
                            </div>
                    </div>
            </div>
        </div>
    )
}
