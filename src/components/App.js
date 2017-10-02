import React, { Component } from 'react';
import DoctorsContainer from './DoctorsContainer'
import { BrowserRouter as Router, Route} from 'react-router-dom';

// import './App.css';

class App extends Component {
  render() {
    return (
    <Router>
      <div>

        <Route exact path="/" component={DoctorsContainer} />

      </div>
    </Router>
  );
  }
}

export default App;
