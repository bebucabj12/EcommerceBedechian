import React from 'react'
import { useCartContext } from '../../Context/cartContext'
import ItemCount from '../ItemCount/ItemCount'
import './itemDetail.css'

export const ItemDetail = ({ producto }) => {   
    const { agregarItem } = useCartContext();

    const onAdd = (cant) => {
       agregarItem( {item: producto, quantity: cant} )        
    }

    return (
        <>
            <div className='itemdetail'>
                <div className="row">
                    <div className="col s5 push-s3">
                        <div className="card horizontal z-depth-5">
                            <div className="card-image responsive-img">
                                <img src={producto.pictureUrl} alt='fotoProducto'/>
                            </div>
                            <div className="card-stacked">
                                <h4 className="header center">{producto.title}</h4>
                                <div className="card-content">
                                    <p>{producto.descripcion}</p>
                                    <h5>{producto.price}</h5>
                                </div>
                                <div className="card-action">
                                    <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </>        
    )
}

