import React from 'react';

export const QuoteCard = (props) => {
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
