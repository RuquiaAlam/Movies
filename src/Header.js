import React, { Component } from 'react';
// import { Link } from "react-router-dom";


import Movies from './component/Movies';
import {
    faGithubAlt,
    faGoogle,
    faFacebook,
    faTwitter,
    faInstagram
  } from '@fortawesome/free-brands-svg-icons';
  import { fas } from '@fortawesome/free-solid-svg-icons'
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from '@fortawesome/free-regular-svg-icons'

import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { faMoneyBill } from '@fortawesome/pro-solid-svg-icons';
// import { faUserGraduate } from '@fortawesome/pro-light-svg-icons';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Header extends Component {

constructor()
{
    super();
    this.state = {
    Title :"Movies App",
    keyword:"User text here"
    
    };
}
    handleChange=(event)=>


    {
this.setState({keyword : event.target.value ? event.target.value:"User Text here,"});
   
this.props.userInput(event.target.value );
    };

    render() {
        return (
            <>
        

      

     
<header>
    {/* <span>

<Link to="/" className= "btn btn-info">
          Home
        </Link>
       </span> */}
<FontAwesomeIcon icon={faHome} href="#" style={{color: "#e2e5e9"}} >

    </FontAwesomeIcon>/
<FontAwesomeIcon icon={ faGoogle}  style={{color: "#e2e5e9"}} />
<FontAwesomeIcon icon={ faFacebook}  style={{color: "#e2e5e9"}} />
<FontAwesomeIcon icon={ faInstagram}  style={{color: "#e2e5e9"}} />

<FontAwesomeIcon icon={ faTwitter}  style={{color: "#e2e5e9"}} />

<i class="fa-solid fa-circle-user" style={{color:" #e9ebf1" ,marginRight: "10px"}}></i>
<FontAwesomeIcon icon={faVideo} style={{color: "#e2e5e9",alignItems:"center"}} />





{/* <i class="fa-brands fa-instagram fa-sm" style="color: #e6e9ef;"></i> */}


{/* <FontAwesomeIcon icon={ faUserGraduate}  style={{color: "#e2e5e9"}} /> */}
                <div className="logo" textAlign="center">{this.state.Title} </div>
            <input onChange ={this.handleChange} />   
        
            <div style ={{color:"white",fontsize:"20px",textAlign:"center"}}>
                {this.state.keyword}
            </div>
            <span >
          
            </span>
         
            </header>
       
      {/* <Movies/>       */}
 
    
            </>
                      
           
        );
    }
}

export default Header;