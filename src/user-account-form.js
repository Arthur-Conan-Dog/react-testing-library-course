import React from 'react'

import { Form, Input, Select, Button } from 'antd'

const Plans = {
  Free: 0,
  Team: 1,
  Enterprise: 2,
}

const planOptions = Object.entries(Plans).map(entry => ({ label: entry[0], value: entry[1] }))

function generateInitialValues(isEditing, user) {
  return isEditing ? Object.assign({}, user) : {
    password: '',
    username: '',
    plan: null,
  }
}

const UserAccountForm = ({ submit, isEditing = false, user }) => {
  const initialValues = generateInitialValues(isEditing, user)

  const submitForm = values => submit(values)

  return (
    <Form initialValues={initialValues} onFinish={submitForm}>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input password!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Account Plan"
        name="plan"
        rules={[{ required: true, message: 'Please choose a plan!' }]}
      >
        <Select placeholder="Choose a plan for your account" options={planOptions} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          {isEditing ? 'Save' : 'Create'}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default UserAccountForm
