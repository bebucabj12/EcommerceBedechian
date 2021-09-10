import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

//detalles de la card
const Item = ({ productos }) => {
    return ( 
        <div className="col s6">
            <div key={productos.id} className="card">
                <div>
                    <img className="activator" src={productos.pictureUrl}/>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{productos.title} {productos.price}<i className="material-icons right">more_vert</i></span>
                    <ItemCount/>
                </div>
                <div className="card-reveal grey">
                    <span className="card-title grey-text text-darken-4">{productos.title}<i className="material-icons right">close</i></span>
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>
            </div>
        </div>                 
    )        
}

export default Item