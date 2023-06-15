
import "./filterMovies.css"

const filterMovies = (props) => {
    console.log(props);

    const renderData = props.Data.map((item) =>
    {
    return(
    
       
        <div className="card">
             <a href="#" target="_blank" >
       <img src ={item.results.poster_path} alt ={item.results.original_title}  width="100%"
    height="275px" />
       </a>
     
        <h3 >{item.results.original_title}</h3>
{/*        
       <p>Year:{item.year}</p>
        <p>RunTime:{item.runtime}minutes</p> 
         <p>{item.genres[0].genres[1]}  </p>
        <p>Director:{item.director}</p>
        <p>Actors:{item.actors} </p>
        <p>{item.plot}</p> */}
        </div>
   
  

    );
});
return(

    
    <div className="main">
        {renderData}
    </div>
    
);
}

export default filterMovies;