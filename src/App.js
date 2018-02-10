import React, { Component } from 'react';

export class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
          <h1>Quote Maker</h1>
        </div>
        <hr />
        <form>
        <lable>Quote</label>
        <input type="text" name>
        </form>
      </div>
    );
  }
}

export default App;
