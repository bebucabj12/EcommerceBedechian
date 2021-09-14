import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

//detalles de la card
const Item = ({ productos }) => {
    return ( 
        <div className="panel hoverable col s4 m4 l4">
            <div key={productos.id} className="card">
                <div className="center">
                    <img className="responsive-img activator" src={productos.pictureUrl}/>
                </div>
                <div className="card-content center">
                    <span className="card-title activator grey-text text-darken-4">{productos.title} {productos.price}<i className="material-icons right">more_vert</i></span>
                    <ItemCount/>
                </div>
                <div className="card-reveal pink lighten-4">
                    <span className="card-title grey-text text-darken-4">{productos.title}<i className="material-icons right">close</i></span>
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    <Link to={`item/${productos.id}`}>
                        <button className="btn-small pink lighten-2">Detalle</button>
                    </Link>
                </div>
            </div>
        </div>                 
    )        
}

export default Item