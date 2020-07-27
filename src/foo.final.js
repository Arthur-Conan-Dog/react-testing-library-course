import {
  fireEvent,
  queryByText,
  queryByLabelText,
} from '@testing-library/react';

class Foo {
  constructor(node) {
    this.node = node;
  }
}

class InputFoo extends Foo {
  change(value) {
    fireEvent.change(this.node, { target: { value } });
  }

  get value() {
    return this.node.value;
  }
}

class SelectFoo extends Foo {
  selectOptionByText(regex) {
    fireEvent.mouseDown(this.hiddenInput());
    const dropdown = document.querySelector('.ant-select-dropdown');
    fireEvent.click(queryByText(dropdown, regex));
  }

  hiddenInput() {
    return this.node.querySelector('input');
  }

  get value() {
    return this.node.textContent;
  }
}

class ButtonFoo extends Foo {
  static getButtonByText(root, regex) {
    const node = queryByText(root, regex);
    return node ? node.parentElement : null;
  }
}

class FormFoo extends Foo {
  static getSelectByLabelText(root, regex) {
    const node = queryByLabelText(root, regex);

    if (!node) {
      throw new Error('could not find matching label');
    }
    return new SelectFoo(node.closest('.ant-select'));
  }

  static getInputByLabelText(root, regex) {
    const node = queryByLabelText(root, regex);

    if (!node) {
      throw new Error('could not find matching label');
    }
    return new InputFoo(node);
  }
}

export { Foo, ButtonFoo, InputFoo, SelectFoo, FormFoo };
