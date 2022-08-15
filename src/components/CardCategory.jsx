import React, {useState,useEffect} from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';

import { GifItem } from './GifItem';


export const CardCategory = ({category}) => {

   const {Images, IsLoading}= useFetchGifs(category);
    
    
  return (
    <>
        <h3>{category}</h3>
        {
            IsLoading && (<h2>Cargando....</h2>)
        }
        <div className='card-grid'>
            {Images.map(elemento =>(
                
                    <GifItem key={elemento.id} {...elemento}/>
                
                ))            
            }
        </div>
    </>
  )
}
