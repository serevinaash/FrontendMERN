import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

export default function InputNumber(props) {
  const { placeholder, name, min, max, prefix, suffix, isSuffixPlural, value, onChange, outerClassName } = props;

  // Gunakan value dari props atau default ke min
  const currentValue = value !== undefined ? value : min;

  const handleChange = (e) => {
    let newValue = e.target.value;
    
    // Remove prefix if exists
    if (prefix) newValue = newValue.replace(prefix, "");
    
    // Remove suffix (both singular and plural)
    if (suffix) {
      if (isSuffixPlural) {
        // Remove both plural and singular forms
        newValue = newValue.replace(new RegExp(`${suffix}s?$`), "");
      } else {
        newValue = newValue.replace(suffix, "");
      }
    }

    const numericValue = Number(newValue);

    if (!isNaN(numericValue)) {
      if (numericValue >= min && numericValue <= max) {
        onChange({ target: { name, value: numericValue } });
      } else if (newValue === "") {
        onChange({ target: { name, value: min } });
      }
    }
  };

  const handleMinus = () => {
    if (currentValue > min) {
      onChange({ target: { name, value: currentValue - 1 } });
    }
  };

  const handlePlus = () => {
    if (currentValue < max) {
      onChange({ target: { name, value: currentValue + 1 } });
    }
  };

  // Generate display value with proper suffix
  const generateDisplayValue = () => {
    let displayValue = `${prefix || ""}${currentValue}`;
    
    if (suffix) {
      if (isSuffixPlural && currentValue > 1) {
        displayValue += `${suffix}s`; // Add plural suffix
      } else {
        displayValue += suffix; // Add singular suffix
      }
    }
    
    return displayValue;
  };

  return (
    <div className={["input-number mb-3", outerClassName].join(" ")}>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text minus" onClick={handleMinus}>
            -
          </span>
        </div>
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder || "0"}
          value={generateDisplayValue()}
          onChange={handleChange}
        />
        <div className="input-group-append">
          <span className="input-group-text plus" onClick={handlePlus}>
            +
          </span>
        </div>
      </div>
    </div>
  );
}

InputNumber.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  isSuffixPlural: PropTypes.bool,
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  outerClassName: PropTypes.string
};

InputNumber.defaultProps = {
  min: 0,
  max: 100,
  isSuffixPlural: false
};