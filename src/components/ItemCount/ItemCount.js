import { useState } from 'react'

//Falta cambiar el button
const ItemCount = () => {
    const [count, setCount] = useState(0);
    console.log('contador', count)
    return (
        <>
        <button onClick={() => setCount(count + 1)}>
            <span>+</span>
        </button>
        <button onClick={() => setCount(count - 1)}>
            <span>-</span>
        </button>
        </>
    )
}

export default ItemCount