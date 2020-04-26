import React , {Component} from 'react';
import {easings} from 'react-animation';
import './Logo.css';

class Logo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
          };
      }
    render() {
        return (
            <div id = "logo" onClick = {()=>this.props.onLogoClick()}> 
                <h1 style = {{color : 'white',letterSpacing : '7px',textShadow : '2px 2px 5px #0279d1'
                ,animation : `pop-in ${easings.easeOutExpo} 3000ms forwards`}}>OSI</h1>
                <h5 style = {{color : 'white',animation : `pop-in ${easings.easeInSine} 2000ms forwards`}}>Open Source Ideas</h5>
            </div>
        );
    }
}

export default Logo;