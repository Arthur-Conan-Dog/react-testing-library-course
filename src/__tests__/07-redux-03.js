// import React from 'react'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import { render as rtlRender, fireEvent } from '@testing-library/react'
// import { Counter } from '../redux-counter'
// import { reducer } from '../redux-reducer'

// implement this custom render function so that we could easily deal with all connected-like components, such as Redux, ReactRounter, Formik etc.
// detail requirements:
// 1. user can provide initialState or the entire store that the ui is rendered with
// 2. user can get all help utilities given by react-testing-library, and the store from this function's return value
// 3. note that you should avoid using store to test implementation details

// function render(
//   ui
// ) {
//   const utils = rtlRender(ui)
//   return {
//     ...utils,
//   }
// }

test('can increment the value', () => {
  // const { getByLabelText, getByText } = render(<Counter />)
})

test('can decrement the value', () => {
  // const { getByLabelText, getByText } = render(<Counter />, {
  //   initialState: { count: 3 },
  // })
})
