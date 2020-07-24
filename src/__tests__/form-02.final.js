import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import UserAccountForm from '../user-account-form';

const setup = (props) => {
  const utils = render(<UserAccountForm {...props} />);

  const getUsernameInput = () => utils.getByLabelText(/username/i);
  const getPasswordInput = () => utils.getByLabelText(/password/i);
  const getPlanSelect = () =>
    utils.getByLabelText(/plan/i).closest('.ant-select');
  const getSubmitButton = () =>
    props.isEditing
      ? utils.getByText(/save/i).parentElement
      : utils.getByText(/create/i).parentElement;

  const changeInputValue = (input, value) =>
    fireEvent.change(input, { target: { value } });
  const changeUsername = (value) => changeInputValue(getUsernameInput(), value);
  const changePassword = (value) => changeInputValue(getPasswordInput(), value);
  const changePlan = (rex) => {
    fireEvent.mouseDown(utils.getByLabelText(/plan/i));
    fireEvent.click(utils.getByText(rex));
  };

  const submitForm = () => fireEvent.click(getSubmitButton());

  return {
    ...utils,
    getUsernameInput,
    getPasswordInput,
    getPlanSelect,
    getSubmitButton,
    changeUsername,
    changePassword,
    changePlan,
    submitForm,
  };
};

test('should submit with correct values', async () => {
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

test('should show feedback messages when validation fails', async () => {
  const submit = jest.fn();
  const { getByText, submitForm } = setup({ submit });

  submitForm();

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
  const { getUsernameInput, getPasswordInput, getPlanSelect } = setup({
    submit,
    isEditing: true,
    user,
  });

  expect(getUsernameInput()).toHaveValue('Jane Doe');
  expect(getPasswordInput()).toHaveValue('pwd123');
  expect(getPlanSelect()).toHaveTextContent('Team');
});
