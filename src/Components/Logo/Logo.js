import React , {Component} from 'react';
import {easings} from 'react-animation';

class Logo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
          };
      }
    render() {
        return (
            <div style ={{backgroundColor : 'black' ,cursor: 'pointer'}} onClick = {()=>this.props.onLogoClick()}> 
                <h1 style = {{fontSize : '85px' ,color : 'white',letterSpacing : '7px',textShadow : '2px 2px 5px #0279d1'
                ,animation : `pop-in ${easings.easeOutExpo} 3000ms forwards`}}>OSI</h1>
                <h5 style = {{color : 'white',animation : `pop-in ${easings.easeInSine} 2000ms forwards`}}>Open Source Ideas</h5>
                </div>
        );
    }
}

export default Logo;