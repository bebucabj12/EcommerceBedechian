import { useState } from 'react'
import ButtonCount from '../ButtonCount/ButtonCount';
import InputCount from '../InputCount/InputCount';
import { Link } from 'react-router-dom'
import './itemCount.css'

//Falta cambiar el button
const ItemCount = ({ initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial);
    const [inputType, setInputType] = useState('button')

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const restar = () => {
        if(count > 1) {
            setCount(count - 1)
        }
    }

    const addCart = () => {
        onAdd(count)
        setInputType('input')
    }

    return (
        <>
            {
                inputType === 'button' ?
                    <div>
                        <ButtonCount onAdd={addCart}/>
                        {/* Quantity */}
                        <div className="input-field col s5">
                            <a onClick={sumar} className="btn-floating btn-small waves-effect waves-light deep-purple lighten-2"><i className="material-icons">add</i></a>
                            <a onClick={restar} className="btn-floating btn-small waves-effect waves-light deep-purple lighten-2"><i className="material-icons">remove</i></a>
                            <select className="browser-default small">
                                <option value="" disabled selected>{count}</option>
                            </select>                
                        </div>
                    </div>
                :
                <div>
                    <Link to='/cart'>
                        <InputCount/>
                    </Link><Link to='/'>
                        <button className="btn-small pink lighten-2">Seguir comprando</button>
                    </Link>
                </div>
            }
        </>
    )
}

export default ItemCount

            