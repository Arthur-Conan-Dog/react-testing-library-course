import React from 'react';
import { render, wait } from '@testing-library/react';
import UserAccountForm from '../user-account-form';

// 🌟 To solve problems raised by form-01's code, we take one step at a time.
// 🌟 In this exercise, we only focus on aggregating code that represents a single step of user action to form a clean code reading context that strongly connected with business case.

// 2. Implement this setup method according to the given interface definition
const setup = (props) => {
  const utils = render(<UserAccountForm {...props} />);

  return {
    ...utils,
    // getUsernameInput,
    // getPasswordInput,
    // getPlanSelect,
    // getSubmitButton,
    // changeUsername,
    // changePassword,
    // changePlan,
    // submitForm,
  };
};

// 1. unskip below tests
test.skip('should submit with correct values', async () => {
  const submit = jest.fn();
  const { changeUsername, changePassword, changePlan, submitForm } = setup({
    submit,
  });

  changeUsername('Jane');
  changePassword('pwd123');
  changePlan('Free');

  submitForm();

  await wait(() =>
    expect(submit).toHaveBeenCalledWith({
      username: 'Jane',
      password: 'pwd123',
      plan: 0,
    })
  );
});

test.skip('should show feedback messages when validation fails', async () => {
  const submit = jest.fn();
  const { getByText, submitForm } = setup({ submit });

  submitForm();

  await wait(() => {
    expect(getByText(/please input username/i)).not.toBeNull();
    expect(getByText(/please input password/i)).not.toBeNull();
    expect(getByText(/please choose a plan/i)).not.toBeNull();
  });
});

test.skip('should be filled with user info when is editing', () => {
  const submit = jest.fn();
  const user = {
    email: 'jane@gmail.com',
    password: 'pwd123',
    username: 'Jane Doe',
    plan: 1,
  };
  const { getUsernameInput, getPasswordInput, getPlanSelect } = setup({
    submit,
    isEditing: true,
    user,
  });

  expect(getUsernameInput()).toHaveValue('Jane Doe');
  expect(getPasswordInput()).toHaveValue('pwd123');
  expect(getPlanSelect()).toHaveTextContent('Team');
});
