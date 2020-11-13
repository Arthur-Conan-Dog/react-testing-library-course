// import React from 'react'
// import {render, fireEvent, wait} from '@testing-library/react'
// import {loadGreeting as mockLoadGreeting} from '../api'
// import {GreetingLoader} from '../greeting-loader-01-mocking'

// our component makes an HTTP request when you click on the load button.
// we don't want it to do this for various reasons, so instead we'll mock
// the module responsible for making that HTTP call to have it return
// a fake version of what we want it to return.
// 1. use jest.mock to mock the '../api' module
// https://jestjs.io/docs/en/mock-functions#mocking-modules

// notice to implement this as an async test:
test('loads greetings on click', () => {
  // 2. provide a mockResolvedValue for mockLoadGreeting that returns the data we want our test to assert against
  //
  // 3. render the GreetingLoader component
  //
  // 4. set the name input's value to whatever you like
  //
  // 5. use fireEvent to click on the load button
  //
  // 6. make an assertion that your mocked loadGreeting function was called once
  // and that it was called with the value you set to the name input's value.
  //
  // 7. use react-testing-library's `wait` utility to wait until the `greeting`
  // node has the correct text content.
  // https://testing-library.com/docs/guide-disappearance#waiting-for-appearance
});
