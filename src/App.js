import './App.css';
import {Link} from 'react-router-dom';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div >
        123 
        <Link to='/login'>login</Link>
        <Link to='/register'>register</Link>
      </div>      
    )
  }
}

export default App;
