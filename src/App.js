import React from 'react';
import './App.css';
import { subscribeToTimer } from './api';

class App extends React.Component {

  constructor(props) {
    super(props);

    subscribeToTimer((err, timestamp) => this.setState({
      timestamp
    }));
  }

  state = {
    timestamp: 'no timestamp yet'
  }

  render() {
    return (
      <div className="App">
        <p>This is the time value: {this.state.timestamp}</p>
      </div>
    )
  }
}

export default App;