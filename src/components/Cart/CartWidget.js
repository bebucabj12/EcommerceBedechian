import { useCartContext } from '../../Context/cartContext'
import './cartwidget.css'

export default function CartWidget() {
    const { cartList } = useCartContext()
    let total = 0;

    cartList.map(item => {
        total += item.item.quantity

        return(total)
    })

    return (
        <>  
            {
            total !== 0 ?
            <div>
                <span id="badget" className="new badge indigo accent-2" data-badge-caption="items">{total}</span>
                <i id="icon"className="material-icons right">shopping_cart</i>
            </div>
            :    
            <i id="icon"className="material-icons right">shopping_cart</i>
            }
        </>
    )
}
