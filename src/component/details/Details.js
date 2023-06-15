import React, { Component } from 'react';
import{Link} from "react-router-dom"
import axios from 'axios';
import "./Details.css";
import "./video.css";
import  VideoStream  from "./VideoStream.js"
//  import ReactPlayer from "react-player";

// import { Link } from "react-router-dom";
// import MovieList from "./MovieList.js";
const url="http://localhost:8060";

const vurl ="https://api.themoviedb.org/3/movie/{movieId}/videos?api_key=a2aa49efe8d37044c7ffabc6f89958bb&language=en-US"




class Details extends Component {

    constructor()
    {
        super();
        this.state={
            details:"",
            movieList:"",
            movieVideo:"",
          
            movieId:sessionStorage.getItem('movieId'),
            // id:sessionStorage.getItem('id')
          

        };
    }
    render() {
        let { details } = this.state;
        return (
         
        
            <div className="card">
  {/* <a href={`"https://api.themoviedb.org/3/movie/${this.state.movieId}/videos?api_key=a2aa49efe8d37044c7ffabc6f89958bb&language=en-US?movieId=${this.state.movieId}`} alt="/"> */}
  <Link to = {`"https://api.themoviedb.org/3/movie/${this.state.movieId}/videos?api_key=a2aa49efe8d37044c7ffabc6f89958bb&language=en-US?movieId=${this.state.movieId}`} >
      <img src ={details.poster_path} alt ={details.title}  width="100%"
     height="275px" />
     </Link>
   {/* </a> */}
  
        <h3 >{details.title}</h3>
        
        <p>{details.overview}</p>
       <p>Year:{details.release_date}</p>
         {/* <p>Released:{item.Released}</p>  */}
         <p>VoteCount:{details.vote_count}</p> 
        
      
      
         <p>Rating:{details.vote_average}</p>
         <VideoStream movieData={this.state.movieVideo}/>
    
         </div>
        );
    
    }
       //async and await
    //on page load api calling

    async componentDidMount() {
        let movieId =this.props.location.search.split("=")[1];
        sessionStorage.setItem("movieId", movieId);
        let response = await axios.get(`${url}/data/${movieId}`, { method: "GET",
        });
        let movieData = await axios.get(`${url}/data/${movieId}`, { method: "GET" });
        this.setState({ details: response.data[0], movieList: movieData.data });

        let movieVideo = await axios.get(`"https://api.themoviedb.org/3/movie/${this.state.movieId}/videos?api_key=a2aa49efe8d37044c7ffabc6f89958bb&language=en-US?movieId=${this.state.movieId}`, { method: "GET" });
        this.setState({ details: response.data[0], movieVideo: movieData.data });
     
      }
    }


    export default  Details;