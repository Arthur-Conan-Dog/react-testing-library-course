import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import { FormFoo, ButtonFoo } from '../foo.final';
import UserAccountForm from '../user-account-form';

const setup = (props) => {
  const utils = render(<UserAccountForm {...props} />);

  const getUsernameInput = () =>
    FormFoo.getInputByLabelText(utils.container, /username/i);
  const getPasswordInput = () =>
    FormFoo.getInputByLabelText(utils.container, /password/i);
  const getPlanSelect = () =>
    FormFoo.getSelectByLabelText(utils.container, /plan/i);
  const getSubmitButton = () =>
    props.isEditing
      ? ButtonFoo.getButtonByText(utils.container, /save/i)
      : ButtonFoo.getButtonByText(utils.container, /create/i);

  const changeUsername = (value) => getUsernameInput().change(value);
  const changePassword = (value) => getPasswordInput().change(value);
  const changePlan = (regex) => getPlanSelect().selectOptionByText(regex);

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

  expect(getUsernameInput().value).toEqual('Jane Doe');
  expect(getPasswordInput().value).toEqual('pwd123');
  expect(getPlanSelect().value).toEqual('Team');
});
