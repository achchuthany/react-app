import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
class RegistrationPersonal extends Form {
  state = {
    data: {
      course: "Commerce",
      faculty: "Faculty of Arts",
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
    course: Joi.string().required().label("Course"),
    faculty: Joi.string().required().label("Faculty"),
  };

  doSubmit = () => {
    console.log("submitted");
  };

  render() {
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
                  {this.renderInput("faculty", "Faculty Name", "text", true)}
                </div>
                <div className="col-md-6">
                  {this.renderInput("course", "Course of Study", "text", true)}
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
                  {this.renderSelect("title", "Title", options)}
                </div>
                <div className="col-md-10">
                  <div className="form-group">
                    {this.renderInput(
                      "last_name",
                      "Last Name or Surname of the Application"
                    )}
                  </div>
                </div>
                <div className="col-md-12">
                  {this.renderInput("name_initials", "Name with Initials")}
                </div>
                <div className="col-md-12">
                  {this.renderInput("full_name", "Full Name", "text", true)}
                </div>
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="col text-right">{this.renderButton("Next")}</div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default RegistrationPersonal;
