import React, { Component } from 'react';
import QuoteForm from './components/QuoteForm'

export class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
          <h1>Quote Maker</h1>
        </div>
        
        <hr />

      </div>
    );
  }
}

export default App;
