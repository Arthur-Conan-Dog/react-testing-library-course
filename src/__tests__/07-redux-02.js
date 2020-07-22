import React from 'react'
import {Provider} from 'react-redux'
import {render, fireEvent} from '@testing-library/react'
import {Counter} from '../redux-counter'
import {store as appStore} from '../redux-store'

test('can render with redux with defaults', () => {
  const {getByLabelText, getByText} = render(
    <Provider store={appStore}>
      <Counter />
    </Provider>,
  )
  fireEvent.click(getByText('+'))
  expect(getByLabelText(/count/i)).toHaveTextContent('1')
})

test('can render with redux with custom initial state', () => {
  // create redux store with a preloaded state: https://redux.js.org/basics/store
  // render Counter component within Provider and set store={customStore}
  // fire a click event on - button
  // make assertion that count's text content has changed
})
