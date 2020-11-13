// import React from 'react'
// import { render, fireEvent } from '@testing-library/react'
// import { HiddenMessage } from '../hidden-message'

// Our component uses a react animation library called react-transition-group.
// By its nature, this library does some interesting things to keep an element
// in the DOM as it's transitioning out which force us to account for those
// in our test. This is really an implementation detail and it is kind of
// annoying. So let's mock out that library to make our tests faster to run
// and easier to write while still getting the confidence that we're hoping for.

// If you look at the hidden-message module we're importing, it only uses the
// `CSSTransition` component from the react-transition-group module. So in
// our mock module factory function that's all we need to return.
// 7. use jest.mock to mock out the react-transition-group component
// https://jestjs.io/docs/en/jest-object#jestmockmodulename-factory-options

test('shows hidden message when toggle is clicked', () => {
  // 1. render the HiddenMessage component with any message you want
  //
  // 2. get the toggle button
  //
  // 3. assert that the text you want to render is not in the document
  //
  // 4. fire an click event on the button:
  //
  // 5. assert that your message is in the docuemnt
  //
  // 6. click on the button again
  //
  // 8. assert that your message is not in the docuemnt anymore
});
