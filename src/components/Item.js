import React from 'react'
import "./Item.css";


const Item = ({ expense, handleDelete, handleEdit }) => {
    return (
        <li className='item'>
            <div className='info'>
                <span className='prop'>{expense.prop}</span>
                <span className='price'>{expense.price}</span>
            </div>
            <div>
                <button className='edit-btn'
                    onClick={() => handleEdit(expense.id)}
                >edit
                </button>
                <button className='clear-btn'
                    onClick={() =>
                        handleDelete(expense.id)
                    }
                >del
                </button>
            </div>
        </li>
    )

}

export default Item