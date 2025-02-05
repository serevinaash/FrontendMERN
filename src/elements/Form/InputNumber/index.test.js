import React from "react";
import { render, fireEvent } from "@testing-library/react";
import InputNumber from "./index";

class TestInput extends React.Component {
  state = { value: 1 };

  handleChange = (e) => {
    const { name, value } = e.target;
    if (value > 30) return;
    this.setState({ [name]: Number(value) });
  };

  render() {
    return (
      <InputNumber
        max={30}
        min={1}
        onChange={this.handleChange}
        name="value"
        value={this.state.value}
      />
    );
  }
}

const setup = () => {
  const { container } = render(<TestInput />);
  const input = container.querySelector(`input.form-control[name='value']`);
  const plusButton = container.querySelector(".plus");
  const minusButton = container.querySelector(".minus");

  return { input, plusButton, minusButton };
};

test("Should be able to increase value by clicking plus", () => {
  const { input, plusButton } = setup();

  fireEvent.click(plusButton);
  expect(input.value).toBe("2");
});

test("Should be able to decrease value by clicking minus", () => {
  const { input, plusButton, minusButton } = setup();

  fireEvent.click(plusButton); // Biar tidak mentok di min
  fireEvent.click(minusButton);
  expect(input.value).toBe("1");
});

test("Should not be able to decrease below min", () => {
  const { input, minusButton } = setup();

  fireEvent.click(minusButton);
  expect(input.value).toBe("1");
});

test("Should not exceed max value", () => {
  const { input, plusButton } = setup();

  for (let i = 0; i < 31; i++) {
    fireEvent.click(plusButton);
  }
  
  expect(input.value).toBe("30");
});
