import React from "react";
import { render, fireEvent } from "@testing-library/react";
import InputNumber from "./index"; // pastikan path-nya benar

function TestInputWrapper() {
  const [value, setValue] = React.useState(1);

  const handleChange = (e) => {
    const numericValue = typeof e.target.value === "number" ? e.target.value : Number(e.target.value);
    if (numericValue <= 30) {
      setValue(numericValue);
    }
  };

  return (
    <InputNumber
      min={1}
      max={30}
      name="duration"
      value={value}
      onChange={handleChange}
      suffix=" night"
      isSuffixPlural={true}
    />
  );
}

const setup = () => {
  const { container } = render(<TestInputWrapper />);
  const input = container.querySelector("input");
  const plus = container.querySelector(".plus");
  const minus = container.querySelector(".minus");

  return { input, plus, minus };
};

test("Should increase value and display with correct suffix", () => {
  const { input, plus } = setup();
  fireEvent.click(plus);
  expect(input.value).toBe("2 nights"); // 🟢 Perhatikan: harus pakai "nights"
});

test("Should decrease value and display with singular suffix", () => {
  const { input, plus, minus } = setup();
  fireEvent.click(plus); // 2
  fireEvent.click(minus); // back to 1
  expect(input.value).toBe("1 night");
});

test("Should not decrease below min", () => {
  const { input, minus } = setup();
  fireEvent.click(minus); // should stay at 1
  expect(input.value).toBe("1 night");
});

test("Should not increase above max", () => {
  const { input, plus } = setup();

  for (let i = 0; i < 50; i++) {
    fireEvent.click(plus);
  }

  expect(input.value).toBe("30 nights");
});
