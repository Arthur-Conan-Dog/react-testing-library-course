import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import { Counter } from '../redux-counter';
import { store as appStore } from '../redux-store';
// 1. you will need following imports to create store
// import { createStore } from 'redux';
// import { reducer } from '../redux-reducer';

test('can render with redux with defaults', () => {
  const { getByLabelText, getByText } = render(
    <Provider store={appStore}>
      <Counter />
    </Provider>
  );
  fireEvent.click(getByText('+'));
  expect(getByLabelText(/count/i)).toHaveTextContent('1');
});

test('can render with redux with custom initial state', () => {
  // 2. create a redux store with a preloaded state: https://redux.js.org/api/createstore#example
  // 3. render Counter component within Provider and set store={customStore}
  // 4. fire a click event on - button
  // 5. make assertion that count's text content has changed
});
