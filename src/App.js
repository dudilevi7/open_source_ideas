import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Issues from './Components/Issues/Issues';
import Logo from './Components/Logo/Logo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      };
  }
  render() {
    return (
    <div className="App">
      <Logo/>
      <Issues/>
    </div>
    );
  }
}
export default App;

