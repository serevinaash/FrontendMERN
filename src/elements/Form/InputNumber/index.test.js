import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import InputNumber from "./index";

class TestInput extends React.Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <InputNumber
        max={30}
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

  return {
    input,
  };
};

test("Should not be able to change when reach max value", async () => {
  const { getByRole } = render(<InputNumber min={1} max={10} value={10} onChange={() => {}} />);
  const input = getByRole("spinbutton");

  fireEvent.change(input, { target: { value: "33" } });

  await waitFor(() => {
    expect(input.value.replace(/\D/g, "")).toBe(""); 
  });
});



test("Should not be able to change when reach max value", () => {
  const { input } = setup();

  fireEvent.change(input, { target: { value: 33 } });
  expect(input.value).toBe("");
});
