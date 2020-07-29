import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FavoriteNumber } from '../favorite-number';

test('entering an invalid value shows an error message', () => {
  const { getByLabelText, getByRole } = render(<FavoriteNumber />);
  const input = getByLabelText(/favorite number/i);
  fireEvent.change(input, { target: { value: 10 } });
  expect(getByRole('alert')).toHaveTextContent(/the number is invalid/i);

  // 1. rerender FavoriteNumber and give it a max prop of 10. read more about rerender function: https://testing-library.com/docs/react-testing-library/api#rerender

  // 2. use the queryByRole to verify that the 'error-message' node is not rendered.
  // learn how queryBy* queries differ from getBy* queries: https://github.com/kentcdodds/react-testing-library/blob/61e382f10d2d8d0be458103b7c267101541ed952/README.md#query-apis
});
