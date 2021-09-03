import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

export default function CartWidget() {
    return (
        <div>
            <FontAwesomeIcon icon={faCartPlus} pull="right" fixedWidth/>
        </div>
    )
}
