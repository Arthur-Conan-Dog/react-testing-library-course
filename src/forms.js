import React from 'react'

import {Form, Input, Button} from 'antd'

const SignInForm = ({submit}) => {
  const initialValues = {
    username: '',
    password: '',
    remember: true,
  }

  const submitForm = values => submit(values)

  return (
    <Form initialValues={initialValues} onFinish={submitForm}>
      <Form.Item
        label="Username"
        name="username"
        rules={[{required: true, message: 'Please input your username!'}]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{required: true, message: 'Please input your password!'}]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export {SignInForm}
