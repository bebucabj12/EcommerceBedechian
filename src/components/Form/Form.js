import { useState } from 'react'
import { useCartContext } from '../../Context/cartContext'
import { getFirestore } from '../../services/getFirebase'
import firebase from 'firebase'
import 'firebase/firestore'
import './form.css'

export default function Form() {
    const { cartList, totalPrice } = useCartContext()

    const [ formData, setFormData ] = useState({
        name: '',
        cel: '',
        email: ''
    })

    const handleOnSubmit = (e) => {
        //Creo la orden
        e.preventDefault()
        let order = {}

        order.date = firebase.firestore.Timestamp.fromDate( new Date() )
        order.buyer = formData
        order.total = totalPrice()

        order.items = cartList.map(cartItem => {
            const id = cartItem.item.item.id
            const title = cartItem.item.item.title
            const price = cartItem.item.item.price

            return {id, title, price}
        })

        //Creo una nueva collection
        const db = getFirestore()
        db.collection('orders').add(order) //add: si no existe la coleccion la crea
        .then(resp => alert('Se ha creado la orden exitosamente. Nº de orden: ' + resp.id))
        .catch(e => console.log(e))
        .finally(() => setFormData({
            name: '',
            cel: '',
            email: ''
        }))

        

        //Update de un campo en uan collection
        // db.collection('items').doc('idProducto').update({
        //     //Campos a actualizar
        //     stock: 8
        // })
    }

    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <div class="row">
                <form onChange={handleOnChange} class="col s6 center">
                    <div class="row">
                        <div class="input-field col s6">
                            <input 
                                id="last_name" 
                                type="text" 
                                class="validate" 
                                name='name' 
                                value={formData.name}
                            />
                            <label for="last_name">Full name</label>
                        </div>
                        <div class="input-field col s6">
                            <input 
                                id="last_name" 
                                type="text" 
                                class="validate"
                                name='cel' 
                                value={formData.cel}
                            />
                            <label for="last_name">Phone</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input 
                                id="email" 
                                type="email" 
                                class="validate"
                                name="email"
                                value={formData.email}
                            />
                            <label for="email">Email</label>
                        </div>
                    </div>
                </form>
            </div>
            <button className="btn-small deep-orange accent-1" onClick={handleOnSubmit}>Crear orden</button>
        </>
    )
}
