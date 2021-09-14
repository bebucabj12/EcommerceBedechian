import { useState, useEffect } from 'react'
import { getFetch } from '../../utils/Mock'
import { ItemList } from './ItemList' 
import { useParams } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'

//Aca va la funcionalidad que manipula los state y todo lo que deberia estar en los componenytes de lista
export default function ItemListContainer(props) {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {idCategory} = useParams()

        useEffect(() => {
        if(idCategory){
            getFetch
            .then(res => {
                setProducts(res.filter(products => products.category === idCategory))
            })
            .catch(err=> console.log(err))
            .finally(() => setLoading(false))
        } else {
            getFetch
            .then(res => {
                setProducts(res)
            })
            .catch(err=> console.log(err))
            .finally(() => setLoading(false))
        }                   
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
