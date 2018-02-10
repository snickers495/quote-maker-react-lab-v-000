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
        <label>Quote</label>
        <input type="text" name="quote"/>
        <label>Author</label>
        <input type="text" name="author"/>
        <input type="submit"
        </form>
      </div>
    );
  }
}

export default App;
