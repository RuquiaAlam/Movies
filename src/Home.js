import React, { Component } from 'react';
import Display from "./component/display/Display.js";
import "./component/display/Display.css";
import Footer from "./Footer.js";
import "./Footer.css";
const url="http://localhost:8060/list";


class Home extends Component {
    constructor()
    {
        super()
        this.state={
            list:'',
        }
    }

    render() {
        return (
            <div class="mainContainer">
                        <Display listData= {this.state.list}/>
                        <Footer year="2023" month ="Mar"/>
            </div>
        );
    }


    componentDidMount()
{
fetch(url,{method:"GET"})
.then((res) => res.json())
.then((data)=>
{
    this.setState({ listData : data});
    console.log(data);


});
}
}

export default Home;