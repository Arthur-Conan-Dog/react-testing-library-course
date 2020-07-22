import React from 'react'
import { render, fireEvent, wait } from '@testing-library/react'
import { SignInForm } from '../forms'

test('should submit with correct values', async () => {
  const submit = jest.fn()
  const { container, getByLabelText } = render(<SignInForm submit={submit} />)

  fireEvent.change(getByLabelText(/username/i), { target: { value: 'Jane' } })
  fireEvent.change(getByLabelText(/password/i), { target: { value: 'pwd123' } })

  fireEvent.click(container.querySelector('button'))

  await wait(() =>
    expect(submit).toHaveBeenCalledWith({
      username: 'Jane',
      password: 'pwd123',
    }),
  )
})
