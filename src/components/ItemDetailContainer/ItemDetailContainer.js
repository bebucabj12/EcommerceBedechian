import { useState, useEffect } from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../services/getFirebase'
import './itemDetailContainer.css'

export default function ItemDetailContainer() {
    const [producto, setProduct] = useState({})
    const { idProducto } = useParams()

    const [loading, setLoading]  = useState(true)

    useEffect(() => {
          const dbQuery = getFirestore()
          
          dbQuery.collection('items').doc(idProducto).get()
          .then(resp => {
                setProduct({id: resp.id, ...resp.data()})
          })
          .catch(err => console.log(err))
          .finally(() => setLoading(false))
        }, [idProducto])

    return (
        <>
            {
                loading ?
                <i className="material-icons center">hourglass_bottom</i>
                :
                <ItemDetail producto={producto}/>
            }
        </>
    )
}
