// import React from 'react'
// import { render, fireEvent, wait } from '@testing-library/react'
// import UserAccountForm from '../user-account-form'

// 🌟 note that you may encounter some problems like elements are not responding as you expected while doing this exercise,
// 🌟 try find out the solutions on stackoverflow, or ant-design/testing-library repo issues.

// 🤔 after you've solved all those problems above and made all tests pass, what other problems your code might have introduced?
// 🤔 (say if our codebase has quite a size, and both ant-design and it grows rapidly

test('should submit with correct values', () => {
  // 1. render UserAccountForm and provide a mock submit function
  // 2. change values of required fields
  // 3. find submit button and fire click/submit event
  // 4. make assertions that mock submit function has been called with correct values
});

test('should show feedback messages when validation fails', () => {
  // 5. render UserAccountForm and provide a mock submit function
  // 6. find submit button and fire click/submit event
  // 7. make assertions that messages are shown
});

test('should be filled with user info when is editing', () => {
  // 8. render UserAccountForm in edit mode
  // 9. make assertions that all fields are filled with user info you provided above
});
