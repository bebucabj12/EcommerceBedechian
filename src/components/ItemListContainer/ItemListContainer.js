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

            const getCollection = idCategory ? dbQuery.collection('items').where('category', '==', idCategory) : dbQuery.collection('items')

            //Traigo la collection según corresponda            
            getCollection.get()
            .then(res => {
                setProducts(res.docs.map(item => ( {id: item.id, ...item.data()} )))
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
                 
        }, [idCategory])

        return (
            <>        
            <h1>{props.gretting}</h1>
                {   loading ? 
                    <div id="loadingIcon" className="preloader-wrapper big active">
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
                    :                
                    <ItemList productos={products}/> 
                }
            </>
    )
}