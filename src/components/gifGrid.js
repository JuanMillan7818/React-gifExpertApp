import React from "react";
import GifGridItem from "./gifGridItem";
import { useFetchGifs } from '../hooks/useFetchGifs';
import Loader from "./loader";

const gifGrid = ({ category }) => {    

    const { data:images, loading} = useFetchGifs( category );

    return(
        <React.Fragment>            
            { loading && <Loader /> }              
            <h2 id="title-category">{ category }</h2>  
            <div className="container-card">                
                {                    
                    images.map( img => (
                        <GifGridItem key={img.id} {...img} category={category} />
                    ))
                }            
            </div> 
        </React.Fragment>
    );
}

export default gifGrid;