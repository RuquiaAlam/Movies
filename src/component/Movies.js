import React  from 'react';
// import Home from "../Home";

// import ReactDOM from "react-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 const Movies = () =>
{
    return(
        <>
     
        <div className="Movies"> 
        <nav>
            <ul>
         
   
   
       

            <FontAwesomeIcon icon={['fas', 'code']} />

        
                <li><a href="#"> Home</a> </li>
                <li><a href="#"> Theater</a> </li>
                <li><a href="#">Kids</a>  </li>
                <li><a href="#">Drama</a>  </li>
                <li><a href="#">Comedy</a>  </li>
            </ul>
            
        </nav>

        </div>
        </>
    )

}

export default Movies;