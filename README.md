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

1.  [`react-dom.js`](./src/__tests__/01-react-dom.js) - Render a React component for testing

2.  [`jest-dom.js`](./src/__tests__/02-jest-dom.js) - Use jest-dom for improved assertions

3.  [`dom-testing-library.js`](./src/__tests__/03-dom-testing-library.js) - Use dom-testing-library to write more
    maintainable React tests

4.  [`react-testing-library.js`](./src/__tests__/04-react-testing-library.js) - Use react-testing-library to render and test
    React Components

### Readings

- [Guiding principles of react-testing-library](https://testing-library.com/docs/guiding-principles)

- [Quick overview of utilities provied by react-testing-library](https://testing-library.com/docs/react-testing-library/cheatsheet)

### Common and simple testing scenarios

5.  [`state.js`](./src/__tests__/05-state.js) - Test React Component state changes with react-testing-library

6.  [`prop-updates.js`](./src/__tests__/06-prop-updates.js) - Test prop updates with react-testing-library

7.  `redux.js` [1](./src/__tests__/07-redux-01.js) [2](./src/__tests__/07-redux-01.js) [3](./src/__tests__/07-redux-01.js) - Test a redux connected React Component

8.  [`http-jest-mock.js`](./src/__tests__/08-http-jest-mock.js) - Mock HTTP Requests with jest.mock in React Component
    Tests

9.  [`mock-component.js`](./src/__tests__/09-mock-component.js) - Mock react-transition-group in React Component Tests
    with jest.mock

- (optional) [`render-props.js`](./src/__tests__/render-props.js) - Test React Component that uses render-props

- (optional) [`custom-hook.js`](./src/__tests__/custom-hook-01.js) - Test a custom hook

### Readings

- Write tests. Not too many. Mostly integration.

  - Static vs Unit vs Integration vs E2E Testing for Frontend Apps: what these mean, why they matter, and why they don't. [source](https://kentcdodds.com/blog/unit-vs-integration-vs-e2e-tests)

  - Write tests. Not too many. Mostly integration. [source](https://kentcdodds.com/blog/write-tests)

  - How to know what to test: practical advice to help you determine what to test. [source](https://kentcdodds.com/blog/how-to-know-what-to-test)

- Your tests should be completely isolated from one another

  - Write fewer, longer tests: making tests too short often leads to poor testing practices and way more tests. [source](https://kentcdodds.com/blog/write-fewer-longer-tests)

  - Test Isolation with React: why your tests should be completely isolated from one another and how to do that. [source](https://kentcdodds.com/blog/test-isolation-with-react)

  - Avoid Nesting when you're testing: why using hooks like `beforeEach` as a mechanism for code reuse leads to unmaintainable tests and how to avoid it. [source](https://kentcdodds.com/blog/avoid-nesting-when-youre-testing)

- Avoid common testing mistakes

  - Testing implemenation details: testing implementation details is a recipe for disaster. Why is that? And what does it even mean? [source](https://kentcdodds.com/blog/testing-implementation-details)

  - Common mistakes that people make when testing JavaScript applications. [source](https://kentcdodds.com/blog/common-testing-mistakes)

- [Others](https://kentcdodds.com/testing/)

### Real world example

10. `form.js` [1](./src/__tests__/10-form-01.js) [2](./src/__tests__/10-form-02.js) [3](./src/__tests__/10-form-03.js) - Test a complex form application built with React and 3rd party UI library.
