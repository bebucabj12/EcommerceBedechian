import { useState, useEffect } from 'react'
import { ItemList } from './ItemList' 
import { useParams } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'
import { getFirestore } from '../../services/getFirebase'

//Aca va la funcionalidad que manipula los state y todo lo que deberia estar en los componenytes de lista
export default function ItemListContainer(props) {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {idCategory} = useParams()

        useEffect(() => {

            const dbQuery = getFirestore()

            //Traigo la collection 
            dbQuery.collection('items').get()
            .then(data => {
                setProducts( data.docs.map(item => ({id: item.id, ...item.data()}) ))
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
                  
        }, [idCategory])

        return (
            <>        
            <h1>{props.gretting}</h1>
                {   loading ? 
                    <i className="material-icons center">hourglass_bottom</i>
                    :                
                    <ItemList productos={products}/> 
                }
            </>
    )
}