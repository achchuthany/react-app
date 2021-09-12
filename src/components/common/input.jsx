import React from "react";
const Input = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        value={props.value}
        id={props.name}
        name={props.name}
        onChange={props.onChange}
        type={props.type}
        className={props.error ? "form-control is-invalid" : "form-control"}
        disabled={props.disabled}
      />
      {props.error && (
        <span className="invalid-feedback">
          <strong> {props.error}</strong>
        </span>
      )}
    </div>
  );
};

export default Input;
