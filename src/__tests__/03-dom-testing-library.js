import React from 'react';
import ReactDOM from 'react-dom';
import { FavoriteNumber } from '../favorite-number';
// 1. we'll need getQueriesForElement imported. read more: https://testing-library.com/docs/dom-testing-library/api-helpers#within-and-getqueriesforelement-apis
// import { getQueriesForElement } from '@testing-library/dom'

test('renders a number input with a label "Favorite Number"', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FavoriteNumber />, div);

  // 2. use getQueriesForElement to get helper queries bind to div

  // 3. choose suitable queries to find the input element and make assertions to replace ones. read more: https://testing-library.com/docs/dom-testing-library/api-queries#queries
  // 🌟note that you may not need to make assertions for the label elements anymore, depends on which helper query you choose to use
  expect(div.querySelector('input').type).toBe('number');
  expect(div.querySelector('label').textContent).toBe('Favorite Number');
});
