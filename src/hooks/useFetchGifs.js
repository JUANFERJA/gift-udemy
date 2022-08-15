import React, {useState, useEffect} from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [Images, setImages] = useState([]);
    const [IsLoading, setIsLoading] = useState(true)
        
    const newImages = async() =>{

        const getImages = await getGifs(category);
        setImages(getImages, ...Images);
        setIsLoading(false);

    }
    
    useEffect( () => {
       newImages();
    },[]);

  return (
    {
        Images, 
        IsLoading
    }
  )
}
