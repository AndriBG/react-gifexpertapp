import React, { useState } from 'react';
import PropTypes from 'prop-types'; 

export const AddCategory = ({ setCategories }) => {

    const [ inputValue, setInputValue ] = useState('');

    const handleInputValue = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) =>  {
        e.preventDefault();

        if ( inputValue.trim().length > 1 ) {
            setCategories(catgs => [inputValue, ...catgs]);
            setInputValue('');
        }

    }

    return (
        <form onSubmit= { handleSubmit }>
            <input
                placeholder = 'Buscar'
                value = { inputValue }
                onChange = { handleInputValue }
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
