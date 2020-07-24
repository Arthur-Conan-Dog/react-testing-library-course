import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import UserAccountForm from '../user-account-form';

test('should submit with correct values', async () => {
  const submit = jest.fn();
  const { getByLabelText, getByText } = render(
    <UserAccountForm submit={submit} />
  );

  fireEvent.change(getByLabelText(/username/i), { target: { value: 'Jane' } });
  fireEvent.change(getByLabelText(/password/i), {
    target: { value: 'pwd123' },
  });

  fireEvent.mouseDown(getByLabelText(/plan/i));
  fireEvent.click(getByText(/free/i));

  fireEvent.click(getByText(/create/i).parentElement);

  await wait(() =>
    expect(submit).toHaveBeenCalledWith({
      username: 'Jane',
      password: 'pwd123',
      plan: 0,
    })
  );
});

test('should show error messages when validation fails', async () => {
  const submit = jest.fn();
  const { getByText } = render(<UserAccountForm submit={submit} />);

  fireEvent.click(getByText(/create/i).parentElement);

  await wait(() => {
    expect(getByText(/please input username/i)).not.toBeNull();
    expect(getByText(/please input password/i)).not.toBeNull();
    expect(getByText(/please choose a plan/i)).not.toBeNull();
  });
});

test('should be filled with user info when is editing', () => {
  const submit = jest.fn();
  const user = {
    email: 'jane@gmail.com',
    password: 'pwd123',
    username: 'Jane Doe',
    plan: 1,
  };
  const { getByLabelText } = render(
    <UserAccountForm isEditing user={user} submit={submit} />
  );

  expect(getByLabelText(/username/i)).toHaveValue('Jane Doe');
  expect(getByLabelText(/password/i)).toHaveValue('pwd123');
  expect(getByLabelText(/plan/i).parentElement.parentElement).toHaveTextContent(
    'Team'
  );
});
