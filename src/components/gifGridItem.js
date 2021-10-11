import React from "react";
import StarIcon from '@material-ui/icons/Star';

const gifGridItem = ( {title, url, category} ) => {    
    return(
        <React.Fragment>
            <div className="card">
                <h3> { title===''? category : title} </h3>
                <img src={url} alt="GIFS"></img>
                <ul>
                    <li><StarIcon /></li>
                    <li><StarIcon /></li>
                    <li><StarIcon /></li>
                    <li><StarIcon /></li>
                    <li><StarIcon /></li>                    
                </ul>
            </div>            
        </React.Fragment>
    );
}

export default gifGridItem;