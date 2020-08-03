import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
// 2. Foos you will need to import and implement according to the given API constraints
// import { FormFoo, ButtonFoo } from '../foo';
import UserAccountForm from '../user-account-form';

// 🌟 To solve problems raised by form-01's code, we take one step at a time.
// 🌟 You may note that in form-02, there are still some problems left unsolved: although we aggregate things like 'select an option' into the setup function,
//    considering our "project" is large, these actions could be done several times among other tests, and we don't want to write these code again and again cuz they are implementation details of 3rd-party components too.
// 🌟 In this exercise, we are gonna implement a series of classes(I just casually call them Foo) and methods to represent certain actions on 3rd-party components and help us solve this problem.

const setup = (props) => {
  const utils = render(<UserAccountForm {...props} />);

  // 3. refactor these methods by using Foos, and before you dive into 'foo.js', think about your own version first: how will you organize these things?
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

// 1. unskip below tests, note only test 3 need to make some small changes.
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

  // 4. replace below calls with unified API exposed by Foos
  expect(getUsernameInput()).toHaveValue('Jane Doe');
  expect(getPasswordInput()).toHaveValue('pwd123');
  expect(getPlanSelect()).toHaveTextContent('Team');
});
