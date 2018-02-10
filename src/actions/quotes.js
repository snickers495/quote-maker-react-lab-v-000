// TODO: Create action creators as defined in tests
export function addQuote(quote) {
  return {
    type: "ADD_QUOTE",
    quote: quote
  }
}
export function removeQuote(quoteId) {
  return {
    type: "REMOVE_QUOTE",
    quoteId: quote
  }
}
