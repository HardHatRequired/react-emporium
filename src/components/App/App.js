import React from 'react';
import NavBar from '../NavBar/NavBar';

import './App.css'

class App extends React.Component {
  render() {
    return(
      <div>
        <NavBar/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
