import React from 'react';

export default class QuoteCard extends React.Component {
  constructor(){
    super()
    this.state = {
      author: '',
      content: ''
    }
  }
  render() {
    return(
      <form>
      <label>Quote</label>
      <input type="text" name="quote"/>
      <label>Author</label>
      <input type="text" name="author"/>
      <input type="submit"/>
      </form>
    )
  }
}
