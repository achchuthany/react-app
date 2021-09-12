import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";

class RegistrationAddress extends Form {
  state = {
    data: {},
    errors: {},
  };
  schema = {
    address_no: Joi.string().required().label("Last name"),
    address_street: Joi.string().required().label("address_street"),
    address_city: Joi.string().required().label("Name with Initials"),
    address_4: Joi.string().required().label("Full Name"),
    address_state: Joi.string().required().label("Course"),
    address_country: Joi.string().required().label("Faculty"),
    address_postal_code: Joi.string().required().label("Faculty"),
  };

  doSubmit = () => {
    console.log("submitted");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="card shadow-sm mt-2">
          <div className="card-header bg-white text-dark text-uppercase">
            Address Details
          </div>
          <div className="card-body">
            <label className="">i. Permanent Address</label>
            <div className="row">
              <div className="col-md-6">
                {this.renderInput("address_permanent_no", "Address No")}
              </div>
              <div className="col-md-6">
                {this.renderInput("address_permanent_street", "Address Street")}
              </div>
              <div className="col-md-6">
                {this.renderInput("address_permanent_city", "Address City")}
              </div>
              <div className="col-md-6">
                {this.renderInput("address_permanent_4", "Address Line 4")}
              </div>
              <div className="col-md-6">
                {this.renderInput("address_permanent_state", "Address State")}
              </div>
              <div className="col-md-6">
                {this.renderInput(
                  "address_permanent_country",
                  "Address Country"
                )}
              </div>
              <div className="col-md-6">
                {this.renderInput(
                  "address_permanent_postal_code",
                  "Address Postal Code"
                )}
              </div>
            </div>

            <label className="">ii. Contact Address</label>

            <div className="row">
              <div className="col-md-6">
                {this.renderInput("address_no", "Address No")}
              </div>
              <div className="col-md-6">
                {this.renderInput("address_street", "Address Street")}
              </div>
              <div className="col-md-6">
                {this.renderInput("address_city", "Address City")}
              </div>
              <div className="col-md-6">
                {this.renderInput("address_4", "Address Line 4")}
              </div>
              <div className="col-md-6">
                {this.renderInput("address_state", "Address State")}
              </div>
              <div className="col-md-6">
                {this.renderInput("address_country", "Address Country")}
              </div>
              <div className="col-md-6">
                {this.renderInput("address_postal_code", "Address Postal Code")}
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="province">
                    iii. Province{" "}
                    <span className="text-danger font-size-16">*</span>
                  </label>
                  <select
                    id="province"
                    name="province"
                    className="form-control"
                    required
                  >
                    <option selected disabled>
                      Select Province
                    </option>
                    <option value="Central">Central</option>
                    <option value="Eastern">Eastern</option>
                    <option value="North Central">North Central</option>
                    <option value="Northern">Northern</option>
                    <option value="North Western">North Western</option>
                    <option value="Sabaragamuwa">Sabaragamuwa</option>
                    <option value="Southern">Southern</option>
                    <option value="Uva">Uva</option>
                    <option value="Western">Western</option>
                  </select>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="shortname">
                    iv. District{" "}
                    <span className="text-danger font-size-16">*</span>
                  </label>
                  <select
                    id="district"
                    name="district"
                    className="form-control select2"
                    required
                  >
                    <option selected disabled>
                      Select District
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-md-2">
                <div className="form-group">
                  <label htmlFor="shortname">District No.</label>
                  <input
                    id="district_no"
                    name="district_no"
                    type="text"
                    className="form-control bg-light"
                    disabled
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="nic">
                    v. National Identity Card / Passport No.{" "}
                    <span className="text-danger font-size-16">*</span>{" "}
                  </label>
                  <input
                    id="nic"
                    name="nic"
                    type="text"
                    className="form-control bg-light"
                    disabled
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="mobile">
                    vi. Mobile
                    <span className="text-danger font-size-16">*</span>{" "}
                  </label>
                  <input
                    id="mobile"
                    name="mobile"
                    type="text"
                    className="form-control bg-light"
                    readonly
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="email">
                    vii. Email{" "}
                    <span className="text-danger font-size-16">*</span>{" "}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control  bg-light"
                    readonly
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row my-4">
          <div class="col text-right">
            <div className="col text-right">{this.renderButton("Next")}</div>
          </div>
        </div>
      </form>
    );
  }
}

export default RegistrationAddress;
