import React, { useState } from "react";
import PropTypes from "prop-types";
import "./index.scss";

export default function Number(props) {
  const { placeholder, name, min, max, prefix, suffix, isSuffixPlural } = props;
  
  // Simpan nilai dalam state
  const [inputValue, setInputValue] = useState(props.value || min);

  const onChange = (e) => {
    let newValue = e.target.value.replace(prefix || "", "").replace(suffix || "", "");
    const numericValue = Number(newValue);
  
    if (!isNaN(numericValue) && numericValue >= min && numericValue <= max) {
      setInputValue(numericValue);
      props.onChange({
        target: { name, value: numericValue },
      });
    } else if (newValue === "") {
      setInputValue(min); // Set nilai ke min jika input kosong
    }
  };
  

  const minus = () => {
    setInputValue((prev) => {
      const numericPrev = Number(prev); // Pastikan nilai numerik
      if (numericPrev > min) {
        const newValue = numericPrev - 1;
        props.onChange({
          target: { name, value: newValue },
        });
        return newValue;
      }
      return prev;
    });
  };
  
  

  const plus = () => {
    if (inputValue < max) {
      setInputValue((prev) => {
        const newValue = prev + 1;
        props.onChange({
          target: { name, value: newValue },
        });
        return newValue;
      });
    }
  };

  return (
    <div className={["input-number mb-3", props.outerClassName].join(" ")}>
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
          value={`${prefix ? prefix : ""}${inputValue}${suffix ? suffix : ""}${isSuffixPlural && inputValue > 1 ? "s" : ""}`}
          onChange={onChange}
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
  min: 1,
  max: 30,
  prefix: "",
  suffix: "",
};

Number.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  isSuffixPlural: PropTypes.bool,
  placeholder: PropTypes.string,
  outerClassName: PropTypes.string,
};
