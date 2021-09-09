import React from "react";
const Select = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <select
        onChange={props.onChange}
        value={props.value}
        id={props.name}
        name={props.name}
        className={props.error ? "form-control is-invalid" : "form-control"}
      >
        <option value="" disabled>
          Select {props.label}
        </option>
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      {props.error && (
        <span className="invalid-feedback">
          <strong> {props.error}</strong>
        </span>
      )}
    </div>
  );
};

export default Select;
