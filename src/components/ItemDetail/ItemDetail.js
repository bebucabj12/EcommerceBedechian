import React from 'react'

export const ItemDetail = ({ producto }) => {
    console.log('item detail', producto)
    return (
        <>
            <div className="row">
                <div className="col s4 push-s4">
                    <div className="card horizontal z-depth-5">
                        <div className="card-image responsive-img">
                            <img src={producto.pictureUrl}/>
                        </div>
                        <div className="card-stacked">
                            <h4 className="header center">{producto.title}</h4>
                            <div className="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information.I am a very simple card. I am good at containing small bits of information.I am a very simple card. I am good at containing small bits of information</p>
                                <h5>{producto.price}</h5>
                            </div>
                            <div className="card-action">
                                <button className="btn-small pink lighten-2">Añadir al carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>        
    )
}

