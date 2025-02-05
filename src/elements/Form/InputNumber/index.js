import React, { useState } from "react";
import propTypes from "prop-types";
import "./index.scss";

export default function Number({ value, onChange, min, max, name, placeholder, outerClassName }) {
  const [rawValue, setRawValue] = useState(value || "");

  const handleChange = (e) => {
    let inputValue = e.target.value.replace(/\D/g, ""); // Hanya angka
    if (inputValue === "") inputValue = "0";

    const numericValue = parseInt(inputValue, 10);
    if (!isNaN(numericValue) && numericValue >= min && numericValue <= max) {
      setRawValue(numericValue);
      onChange({ target: { name, value: numericValue } });
    }
  };

  const minus = () => {
    if (rawValue > min) {
      setRawValue((prev) => prev - 1);
      onChange({ target: { name, value: rawValue - 1 } });
    }
  };

  const plus = () => {
    if (rawValue < max) {
      setRawValue((prev) => prev + 1);
      onChange({ target: { name, value: rawValue + 1 } });
    }
  };

  return (
    <div className={["input-number mb-3", outerClassName].join(" ")}>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text minus" onClick={minus}>
            -
          </span>
        </div>
        <input
          type="text"
          min={min}
          max={max}
          name={name}
          pattern="[0-9]*"
          className="form-control"
          placeholder={placeholder || "0"}
          value={rawValue}
          onChange={handleChange}
        />
        <div className="input-group-append">
          <span className="input-group-text plus" onClick={plus}>
            +
          </span>
        </div>
      </div>
    </div>
  );
}

Number.defaultProps = {
  min: 0,
  max: 100,
  placeholder: "0",
};

Number.propTypes = {
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onChange: propTypes.func.isRequired,
  min: propTypes.number,
  max: propTypes.number,
  name: propTypes.string.isRequired,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
};
