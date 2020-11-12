// import React from 'react';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import { render as rtlRender, fireEvent } from '@testing-library/react';
// import { Counter } from '../redux-counter';
// import { reducer } from '../redux-reducer';

// implement this custom render function so that we could easily deal with all redux-connected components.
// requirements:
// 1. user can provide initialState or the entire store that the ui is rendered with;
// 2. user can get all help utilities given by react-testing-library;
// 3. be careful not to block the original features of the `render` function.
// FYI: you could also return the store from this function, just note that you should avoid using store to test implementation details.

// function render(ui) {
//   const utils = rtlRender(ui);
//   return {
//     ...utils,
//   };
// }

test('can increment the value', () => {
  // const { getByLabelText, getByText } = render(<Counter />);
});

test('can decrement the value', () => {
  // const { getByLabelText, getByText } = render(<Counter />, {
  //   initialState: { count: 3 },
  // })
});
