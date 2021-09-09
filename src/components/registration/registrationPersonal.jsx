import React, { Component } from "react";
import Input from "../common/input";
import Joi from "joi-browser";
import Select from "../common/select";
class RegistrationPersonal extends React.Component {
  state = {
    enroll: {
      course: "Commerce",
      faculty: "Faculty of Arts",
    },
    personal: {
      title: "Mrs",
      last_name: "",
      name_initials: "Y. Achchuthan",
      full_name: "Yogarajah Achchuthan",
    },
    errors: {},
  };
  schema = {
    last_name: Joi.string().required().label("Last name"),
    title: Joi.string().required().label("Title"),
    name_initials: Joi.string().required().label("Name with Initials"),
    full_name: Joi.string().required().label("Full Name"),
  };

  validate = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(this.state.personal, this.schema, options);
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    console.log("submitted");
  };
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const personal = { ...this.state.personal };
    personal[input.name] = input.value;
    this.setState({ personal, errors });
  };

  render() {
    const { enroll, personal, errors } = this.state;
    const options = [
      { value: "Mr", name: "Mr" },
      { value: "Miss", name: "Miss" },
      { value: "Mrs", name: "Mrs" },
    ];
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className="card shadow-sm mt-2">
            <div className="card-header bg-white text-dark text-uppercase">
              Course Details
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <Input
                    name="faculty"
                    label="Faculty"
                    value={enroll.faculty}
                    onChange={this.handleChange}
                    error={errors.faculty}
                    disabled={true}
                  />
                </div>
                <div className="col-md-6">
                  <Input
                    name="course"
                    label="Name of the Course of Study"
                    value={enroll.course}
                    onChange={this.handleChange}
                    error={errors.course}
                    disabled={true}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="card mt-4 shadow-sm">
            <div className="card-header bg-white text-dark text-uppercase">
              Personal Details
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-2">
                  <Select
                    onChange={this.handleChange}
                    value={personal.title}
                    label="Title"
                    name="title"
                    options={options}
                    error={errors.title}
                  />
                </div>
                <div className="col-md-10">
                  <div className="form-group">
                    <Input
                      name="last_name"
                      label="Last Name or Surname of the Application"
                      value={personal.last_name}
                      onChange={this.handleChange}
                      error={errors.last_name}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <Input
                    name="name_initials"
                    label="Name with Initials"
                    value={personal.name_initials}
                    onChange={this.handleChange}
                    error={errors.name_initials}
                    disabled={true}
                  />
                </div>
                <div className="col-md-12">
                  <Input
                    name="full_name"
                    label="Full Name"
                    value={personal.full_name}
                    onChange={this.handleChange}
                    error={errors.full_name}
                    disabled={true}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="col text-right">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={this.validate()}
              >
                {" "}
                Next{" "}
              </button>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default RegistrationPersonal;
