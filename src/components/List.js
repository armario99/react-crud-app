import React from 'react'
import { MdDelete } from 'react-icons/md';
import Item from './Item';
import './List.css';

const List = ({ handleDelete, expenses, handleEdit, clearItems }) => {
    return (
        <>
            <ul className='list'>
                {/* Item */}
                {expenses.map(expense => {
                    return (
                        <Item
                            expense={expense}
                            key={expense.id}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                        />
                    )
                })}
            </ul>
            {expenses.length > 0 && (
                <button className='btn' onClick={clearItems}>
                    목록 지우기
                    <MdDelete className='btn-icon' />
                </button>
            )}
        </>
    )
}

export default List