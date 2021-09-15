//Se hace el map que recibe los datos por props del item.js 
import React from 'react'
import Item from './Item'

//Logica del funcionamiento solo lista los items
export const ItemList = ({ productos }) => {
    //Aca se hace el mapeo
    return (
        <div className="itemgrid">
            <div className="row">            
                { productos.map(products => <Item key={products.id} productos={products}/>) }            
            </div>
        </div>
        
    )
}