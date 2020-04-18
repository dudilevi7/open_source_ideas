import React , {Component} from 'react';
import {easings} from 'react-animation';
class Logo extends Component {
    state = {  }
    render() {
        return (
            <div style ={{backgroundColor : 'black'}}> 
                <h1 style = {{paddingTop:'5px',fontSize : '45px' ,color : 'white',animation : `pop-in ${easings.easeOutExpo} 3000ms forwards`}}>Open Source Ideas</h1>
                </div>
        );
    }
}

export default Logo;