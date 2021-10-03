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
        if(isRepeat(item.id)) {
            //Creo copia del carrito existente
            const upDateQuantity = [... cartList]
            //Cuando los items sean iguales sumamos al item que ya estaba en el carrito
            upDateQuantity.map(element => {
                if(element.item.id === item.id) {
                    element.quantity += quantity
                }
            })
            setCartList(upDateQuantity)
        } else {
            setCartList( [...cartList, {item, quantity}] )
        }
    }

    //Logica que busca el item seleccionado en el array del carrito
    const isRepeat = (id) => {
        cartList.find(element => element.item.id === id)
    }
    
    const clear = () => {
        setCartList([])
    }

    // const removeItem = (itemId) => {
    //     const cartFilter = cartList.filter(element => 
    //     element.item.id !== id)

    //     setCartList(cartFilter)
    // }

    return(
        <cartContext.Provider value={{
            cartList, 
            setCartList,
            agregarItem,
            clear
        }} >
            {children}
        </cartContext.Provider>
    )
}