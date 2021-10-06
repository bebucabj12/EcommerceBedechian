import { useCartContext } from '../../Context/cartContext'
import './cart.css'
import CartDetail from './CartDetail'
import CartEmpty from './CartEmpty'
import 'firebase/firestore'

export default function Cart() {
    const { cartList } = useCartContext()

    return (
        <div>
            {
                cartList.length === 0 ?
                    <CartEmpty/>
                :
                    <CartDetail/>          
            }
        </div>
    )
}