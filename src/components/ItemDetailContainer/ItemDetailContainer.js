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
                <div className="loadingIcon">
                    <div className="preloader-wrapper big active">
                        <div className="spinner-layer spinner-blue-only">
                            <div className="circle-clipper left">
                                <div className="circle"></div>
                            </div>
                            <div className="gap-patch">
                                <div className="circle"></div>
                            </div>
                            <div className="circle-clipper right">
                                <div className="circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <ItemDetail producto={producto}/>
            }
        </>
    )
}
