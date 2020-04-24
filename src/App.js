import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Issues from './Components/Issues/Issues';
import Logo from './Components/Logo/Logo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        reload : false
      };
  }
  onLogoClick = ()=> {
    this.setState({reload : !this.state.reload})
    
  }
  render() {
    return (
      <div className="App">
        <Logo onLogoClick = {this.onLogoClick}/>
        <Issues key = {String(this.state.reload)}/>
      </div>
    );
  }
}
export default App;

