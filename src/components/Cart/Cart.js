import { useState } from 'react'
import { useCartContext } from '../../Context/cartContext'
import { getFirestore } from '../../services/getFirebase'
import './cart.css'
import CartDetail from './CartDetail'
import CartEmpty from './CartEmpty'

export default function Cart() {
    const { cartList, totalPrice } = useCartContext()
    const [loading, setLoading] = useState(true)

    const [ formData, setFormDta ] = useState({
        name: '',
        cel: '',
        email: ''
    })

    const handleOnSubmit = (e) => {
        //Creo la orden
        e.preventDefault()
        let order = {}

        order.buyer = {name:'Soledad Gomez', cel:'1532665896', email:'sgomez@gmail.com'}
        order.total = totalPrice()

        order.items = cartList.map(cartItem => {
            const id = cartItem.item.item.id
            const title = cartItem.item.item.title
            const price = cartItem.item.item.price

            return {id, title, price}
        })

        const db = getFirestore()
        db.collection('orders').add(order) //add: si no existe la coleccion la crea
        .then(resp => console.log(resp))
        .catch(e => console.log(e))
        .finally(() => setLoading(false))
    }

    return (
        <div>
            {
                cartList.length === 0 ?
                    <CartEmpty/>
                :
                    <CartDetail/>                
            }
            <button onClick={handleOnSubmit}>Crear orden</button>
        </div>
    )
}