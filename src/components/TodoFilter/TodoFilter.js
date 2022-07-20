import React from 'react';
import './TodoFilter.css';

const TodoFilter = ({ value, onChange }) => (
    <label className='TodoFilter'>
        <input
            type='text'
            value={value}
            onChange={onChange}
            className='TodoFilter__input'
        />
        <span className='TodoFilter__filter' >Filter</span>
    </label>
);

export default TodoFilter;