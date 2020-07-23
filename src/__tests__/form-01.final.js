import React from 'react'
import { render, fireEvent, wait } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import { SignUpForm } from '../forms'

test('should submit with correct values', async () => {
  const submit = jest.fn()
  const { container, getByLabelText, getByText, debug } = render(<SignUpForm submit={submit} />)

  fireEvent.change(getByLabelText(/username/i), { target: { value: 'Jane' } })
  fireEvent.change(getByLabelText(/password/i), { target: { value: 'pwd123' } })

  fireEvent.mouseDown(getByLabelText(/plan/i))
  fireEvent.click(getByText(/free/i))

  fireEvent.click(container.querySelector('button'))

  await wait(() =>
    expect(submit).toHaveBeenCalledWith({
      username: 'Jane',
      password: 'pwd123',
      plan: 0,
    }),
  )
})

test('should show error messages when validation fails', async () => {
  const submit = jest.fn()
  const { container, getByText, debug } = render(<SignUpForm submit={submit} />)

  fireEvent.click(container.querySelector('button'))

  await wait(() => {
    expect(getByText(/please input username/i)).not.toBeNull()
    expect(getByText(/please input password/i)).not.toBeNull()
    expect(getByText(/please choose a plan/i)).not.toBeNull()
  })
})
