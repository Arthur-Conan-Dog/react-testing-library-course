import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import {FavoriteNumber} from '../favorite-number'

test('entering an invalid value shows an error message', () => {
  const {getByLabelText, getByRole} = render(<FavoriteNumber />)
  const input = getByLabelText(/favorite number/i)
  fireEvent.change(input, {target: {value: 10}})
  expect(getByRole('alert')).toHaveTextContent(/the number is invalid/i)

  // call rerender with the FavoriteNumber and a max prop of 10.

  // learn how queryBy* queries differ from getBy* queries: https://github.com/kentcdodds/react-testing-library/blob/61e382f10d2d8d0be458103b7c267101541ed952/README.md#query-apis
  // use the queryByRole to verify that the 'error-message' node is not rendered.
})
