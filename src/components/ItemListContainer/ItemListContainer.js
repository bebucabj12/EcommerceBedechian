import {useState, useEffect} from 'react'
import { getFetch } from '../../utils/Mock'
import { ItemList } from './ItemList' 

//Aca va la funcionalidad que manipula los state y todo lo que deberia estar en los componenytes de lista
export default function ItemListContainer(props) {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

        useEffect(() => {
            getFetch
            .then(res => {
                setProducts(res)
                setLoading(false)
            })       
        }, [])

        console.log('products', products)

        return (
            <>        
            <h1>{props.gretting}</h1>
                {   loading ? 
                        <h2>Loading...</h2> 
                    :                
                    <ItemList productos={products}/> 
                }
            </>
    )
}
