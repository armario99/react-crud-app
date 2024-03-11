import React from 'react'
import "./Form.css"

export default function Form({prop, handleprop , price, handleprice, edit, handleSubmit}) {

  return (
    <form onSubmit={handleSubmit}>
            <div className='form-center'>
                <div className='form-group'>
                    <label htmlFor='prop'>지출 항목</label>
                    <input
                        type="text"
                        className="form-control"
                        id="prop"
                        name="prop"
                        value={prop}
                        placeholder="예) 렌트비"
                        onChange={handleprop}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='price'>비용</label>
                    <input
                        type="number"
                        className="form-control"
                        id="price"
                        name="price"
                        value={price}
                        placeholder="예) 100"
                        onChange={handleprice}
                    />
                </div>
            </div>
            <button type='submit' className='btn'>
                    {edit ? "수정" : "제출"}
            </button>
        </form>
    )
}
