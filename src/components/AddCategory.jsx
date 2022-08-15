import React, {useState} from 'react';

export const AddCategory = ({onAddCategory}) => {

    const [inputValue, setInputValue] = useState('');
    const InputOnchange = ({target}) =>{
       setInputValue(target.value, ...inputValue);
    }

    const onSubmit = (event) => {

        event.preventDefault();
        const valCategory = inputValue.trim();
        if(valCategory.length < 1) return;
        onAddCategory(valCategory)
        setInputValue('');
    }
  
    return (

        <form onSubmit={ (event) => onSubmit(event)}>
            <input
            type="text"
            placeholder='Buscar Gifs'
            value={inputValue}
            onChange = { InputOnchange }
             />

        </form>
        
  
  )
}
