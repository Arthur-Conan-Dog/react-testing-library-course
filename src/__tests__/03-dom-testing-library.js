import React from 'react'
import ReactDOM from 'react-dom'
import {FavoriteNumber} from '../favorite-number'

test('renders a number input with a label "Favorite Number"', () => {
  const div = document.createElement('div')
  ReactDOM.render(<FavoriteNumber />, div)
  // https://testing-library.com/docs/dom-testing-library/example-intro
  // use dom-testing-library to get helper queries

  // use helper queries to find the input element and make assertions

  // note that you may not need to make assertions for the label elements anymore,
  // depends on which helper query you choose to use
})
