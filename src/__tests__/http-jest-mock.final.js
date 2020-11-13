import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import { loadGreeting as mockLoadGreeting } from '../api';
import { GreetingLoader } from '../greeting-loader-01-mocking';

jest.mock('../api');

test('loads greetings on click', async () => {
  const testGreeting = 'TEST_GREETING';
  mockLoadGreeting.mockResolvedValueOnce({ data: { greeting: testGreeting } });
  const { getByLabelText, getByText } = render(<GreetingLoader />);

  const inputValue = 'Mary';
  fireEvent.change(getByLabelText(/name/i), { target: { value: inputValue } });
  fireEvent.click(getByText(/load/i));

  expect(mockLoadGreeting).toHaveBeenCalledTimes(1);
  expect(mockLoadGreeting).toHaveBeenCalledWith(inputValue);
  await wait(() =>
    expect(getByLabelText(/greeting/i)).toHaveTextContent(testGreeting)
  );
});
