// import {
//   ...
// } from '@testing-library/react';

class Foo {
  constructor(node) {
    this.node = node;
  }
}

class InputFoo extends Foo {
  change(value) {}

  get value() {}
}

class SelectFoo extends Foo {
  selectOptionByText(regex) {}

  hiddenInput() {}

  get value() {}
}

class ButtonFoo extends Foo {
  static getButtonByText(root, regex) {}
}

class FormFoo extends Foo {
  static getSelectByLabelText(root, regex) {}

  static getInputByLabelText(root, regex) {}
}

export { Foo, ButtonFoo, InputFoo, SelectFoo, FormFoo };
