<h1 align="center">
  Test React Components with Jest and React Testing Library
</h1>

This repo is derived from 💯 [Kent.C.Dodds' react-testing-library-course](https://github.com/kentcdodds/react-testing-library-course).

It is re-organized with relative reading materials and more complex real world examples based on my experience and thoughts about using react-testing-library.

## Links

  - [Preparation](#preparation)
  - [Course schedule](#course-schedule)
    - [Understand what problems these tools are solving](#understand-what-problems-these-tools-are-solving)
    - [Readings](#readings)
    - [Common and simple testing senarios](#common-and-simple-testing-senarios)
    - [Readings](#readings-1)
    - [Real world example](#real-world-example)

## Preparation

Make sure you have node >= 10 & yarn >= 1.19.1 installed, and run `yarn`.

Run `yarn test` to launch the test runner in the interactive watch mode.

## Course schedule

### Understand what problems these tools are solving

1.  `react-dom.js` - Render a React component for testing

2.  `jest-dom.js` - Use jest-dom for improved assertions

3.  `dom-testing-library.js` - Use dom-testing-library to write more
    maintainable React tests

4.  `react-testing-library.js` - Use react-testing-library to render and test
    React Components

### Readings

- [Guiding principles of react-testing-library](https://testing-library.com/docs/guiding-principles)

- [Quick overview of utilities provied by react-testing-library](https://testing-library.com/docs/react-testing-library/cheatsheet)

### Common and simple testing senarios

5.  `state.js` - Test React Component state changes with react-testing-library

6.  `prop-updates.js` - Test prop updates with react-testing-library

7.  `redux.js` - Test a redux connected React Component

8.  `http-jest-mock.js` - Mock HTTP Requests with jest.mock in React Component
    Tests

9.  `mock-component.js` - Mock react-transition-group in React Component Tests
    with jest.mock

- (optional) `render-props.js` - Test React Component that uses render-props

- (optional) `custom-hook.js` - Test a custom hook

### Readings

- [Theories about writing easy understood and maintainable tests](https://kentcdodds.com/testing/)

### Real world example

10. `form.js` - Test a complex form application built with React and 3rd party UI library.
