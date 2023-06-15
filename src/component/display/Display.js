import "./Display.css";

// import {Link} from "react-router-dom"


const Display=(props)=>
{
const listMovies =({listData}) =>
{
if(listData)
{
  return listData.map((item) =>
  {
    return(
    // <Link key={item._id } to = {`listing/${item.mealtype_id}`}>

      
    <div className="card">
             <a href={`/data?movieId=${item.id}`}>
         
          <img src ={item.poster_path} alt ={item.title}  width="100%"
         height="275px" />
       </a>
         
            

     
            <h3 >{item.title}</h3>
             
            <p>{item.overview}</p>
           <p>Year:{item.release_date}</p>
             {/* <p>Released:{item.Released}</p>  */}
             <p>VoteCount:{item.vote_count}</p> 
            
          
          
             <p>Rating:{item.vote_average}</p>
           </div>
      

    )
   
    });

}
};
return <div class="main">
     {listMovies(props)}
</div>

}
export default Display;