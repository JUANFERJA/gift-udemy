import React,{useState} from 'react';
import {AddCategory} from './components/AddCategory';
import { CardCategory } from './components/CardCategory';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);
  
    const onAddCategory = (category) =>{

        if(categories.includes(category)){
            alert("ya existe la categoria");
             return;
            }
        setCategories([category,...categories])
        /* setCategories([]) */
    }
  
  return (
    <>
        <h1>preba</h1>

        <AddCategory onAddCategory = { (category => onAddCategory(category)) }/>
        
        {categories.map(elemento => (
         
         <CardCategory key={elemento} category = {elemento} />

        ))}
            
        
    </>
  )
}
