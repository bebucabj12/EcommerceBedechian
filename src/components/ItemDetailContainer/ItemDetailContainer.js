import { useState, useEffect, createContext } from 'react'
import { getFetch } from '../../utils/MockDetail'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

export default function ItemDetailContainer() {
    const [producto, setProduct] = useState({})
    const {idProducto} = useParams()

    useEffect(() => {
            getFetch
            .then(res => {
                setProduct(res)
            })
            .catch(err=> console.log(err))
        }, [idProducto])

        console.log('products en detail', idProducto)
    return (
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}
