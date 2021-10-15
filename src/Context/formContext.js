import { useState, createContext, useContext } from 'react'
import { useCartContext } from './cartContext'
import { getFirestore } from '../services/getFirebase'
import firebase from 'firebase'
import 'firebase/firestore'

//Creo el contexto
export const formContext = createContext([]);

//Función que retorna la creacion del contexto
export const useFormContext = () => {
    return useContext(formContext)
}

//Declaro componente para abstraer toda la funcionalidad del contexto
export const FormContext = ({ children }) => {
    const initialForm = {
        name: '',
        cel: '',
        email: ''
    }
    const { cartList, totalPrice } = useCartContext()
    const [ formData, setFormData ] = useState(initialForm)
    const [ error, setError ] = useState({})

    const validationFields = (e) => {
        if(formData.name === "" || formData.cel === ""  || formData.email === "" ){
            e.preventDefault()
            console.log('Complete los datos')
            return false
        } else {
            handleOnSubmit()
            return true
        }
    }

    const handleOnSubmit = (e) => {
        console.log('Entro al handleSubmit')
        //Creo la orden
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
        .finally(() => setFormData(initialForm))
            
        //Control de stock
        const itemsUpdate = db.collection('items').where(
            firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i => i.item.item.id)
        )

        const batch = db.batch()

        itemsUpdate.get()
        .then(collection => {
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref, {
                    stock: docSnapshot.data().stock - cartList.find(item => item.item.item.id === docSnapshot.id).item.quantity
                })
            })

            batch.commit()
            .then(res => {
                console.log('resultado del batch', res)
            })
        }) //Fin control de stock
    }

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleBlur = (e) => {
        handleOnChange(e)
        setError(validateForm(formData))
    }

    const validateForm = (formData) => {
        let error = {}
        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

        if(!formData.name.trim()) {
            error.name = 'El campo "Nombre" es requerido'
        } else if(!regexName.test(formData.name.trim())) {
            error.name = 'Ingrese un nonmbre válido'
        }

        if(!formData.cel.trim()) {
            error.cel = 'El campo "Phone" es requerido'
        }

        if(!formData.email.trim()) {
            error.email = 'El campo "email" es requerido'
        } else if(!regexEmail.test(formData.email.trim())) {
            error.email = 'Ingrese un email válido'
        }

        return error
    }

    return(
        <formContext.Provider value={{
            handleOnSubmit,
            handleOnChange,
            handleBlur,
            error,
            formData,
            validationFields
        }} >
            {children}
        </formContext.Provider>
    )
}