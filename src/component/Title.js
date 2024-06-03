import React, { Component } from "react";
import './Title.css';

const TITLES = [
  "Bienvenue au",
  "Welcome to",
  "Bienvenido al ",
  "Willkommen im ",
];

class Title extends Component{

    constructor(){
        super();
        this.state={titleindex:0, fadein:true};

    }
    componentDidMount(){
        this.animateTitle();
        this.timeout= setTimeout(() => {
            this.setState({fadein:false})
        }, 2000);  
    }
    componentWillUnmount(){
        clearInterval( this.titleinterval);
        clearTimeout(this.timeout);
    }
    animateTitle(){
        this.titleinterval=setInterval(()=>{
                const titleindex= (this.state.titleindex+1) % TITLES.length ;
                this.setState({titleindex ,fadein:true }) ;
               this.timeout=setTimeout(() => {
                    this.setState({fadein:false})
                }, 2000);
            },4000);
    }
    render(){
        return(
            <p   className={this.state.fadein ?  "title-fade-in":"title-fade-out"}>
             {TITLES[this.state.titleindex]} Parc Blue Place
        </p>
        );    
    }
}
export default Title;