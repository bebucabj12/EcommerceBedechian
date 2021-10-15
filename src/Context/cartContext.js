import { useState, createContext, useContext } from 'react'

//Creo el contexto
export const cartContext = createContext([]);

//Función que retorna la creacion del contexto
export const useCartContext = () => {
    return useContext(cartContext)
}

//Declaro componente para abstraer toda la funcionalidad del contexto
export const CartContext = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const agregarItem = (item, quantity) => {

        if(isRepeat(item.item.id)) {
            //Creo copia del carrito existente
            const upDateQuantity = [...cartList]            
            //Cuando los items sean iguales sumamos al item que ya estaba en el carrito
            upDateQuantity.forEach(element => {
                if(element.item.item.id === item.item.id) {
                    element.item.quantity += item.quantity
                }
            })            
            setCartList(upDateQuantity)
        } else {
            setCartList( [...cartList, {item, quantity}] )
        }
    }

    //Logica que busca el item seleccionado en el array del carrito
    const isRepeat = (id) => {      
        const index = cartList.findIndex(element => element.item.item.id === id)
        
        if(index !== -1) {
            return true
        }

        return false
    }
    
    const clear = () => {
        setCartList([])
    }

    const removeItem = (itemId) => {
        const cartFilter = cartList.filter(element => 
        element.item.item.id !== itemId)

        setCartList(cartFilter)
    }

    const totalPrice =()=>{
        return cartList.reduce((acum, valor)=>(acum + (valor.item.quantity * valor.item.item.price)), 0) 
      }


    return(
        <cartContext.Provider value={{
            cartList, 
            setCartList,
            agregarItem,
            clear,
            removeItem,
            totalPrice
        }} >
            {children}
        </cartContext.Provider>
    )
}