import React, { Component } from 'react';
import "./component/style.css";
import Header from "./Header.js";
// import JSON from "./datamov.json";
// import JSON from "./data.json";

import Home from "./Home.js";
// import Movies from "./component/Movies";
// import Footer from "./Footer.js";
// import "./Footer.css";


// import 'bootstrap/dist/css/bootstrap.min.css';



// import Main from "./component/Main";
import Display from "./component/display/Display";

const url="http://localhost:8060/list";


 class App extends Component {

    constructor()
    {
      super()
      this.state={
        moviesData:"",
        filteredData :"",
        Data:""
  
        }
      }
      filteredData =(keyword) =>
      {
        let output =this.state.moviesData.filter((data) =>{
  return (
    data.title.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) > -1      
          );
        });
        console.log("Filtered Data ",output);
        this.setState ({filteredData:output});
      };
    
  
   
  
    render()
    {
      return (
       <>

      <Header userInput = {(data) => {this.filteredData(data)}}/>
      <Display  listData={this.state.filteredData}/>
     <Display  listData={this.state.moviesData}/>
     {/* <Footer year="2023" month ="Mar"/> */}
     <Home/>
     


       
      
       
  
  
       </>
      );
    
  }

  componentDidMount()
{
fetch(url,{method:"GET"})
.then((res) => res.json())
.then((data)=>
{
    this.setState({ moviesData : data});
    console.log(data);


});
}
  }
  export default App;