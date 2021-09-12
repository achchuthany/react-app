import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import http from "../services/httpService";
import config from "../../config.json";
import { Redirect } from "react-router-dom";
class Login extends Form {
  state = {
    data: {
      remember: "",
      email: "",
      password: "",
    },
    errors: {},
    isLoggedIn: false,
  };
  schema = {
    password: Joi.string().min(8).required().label("Password"),
    email: Joi.string()
      .email({ minDomainSegments: 2 })
      .required()
      .label("Email"),
    remember: Joi.optional().label("Rember Me"),
  };

  doSubmit = async () => {
    const obj = this.state.data;
    try {
      const { data } = await http.post(config.api + "/login", obj);
      localStorage.setItem("token", data.token);
      this.setState({ isLoggedIn: true });
      this.props.history.push("/registration/personal");
    } catch (ex) {
      if (ex.responce && ex.responce.status === 404) {
        console.log("Error", ex);
      }
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row vh-100 justify-content-center align-items-center">
          <div className="col-md-5">
            <div className="">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="card rounded-lg p-5 shadow-sm">
                    <div className="card-body">
                      <div className="row mb-3">
                        <div className="col-lg-12">
                          <div className="text-center h6 text-uppercase">
                            Sign in
                          </div>
                        </div>
                      </div>

                      <div className="">
                        <form onSubmit={this.handleSubmit}>
                          {this.renderInput("email", "E-Mail Address")}

                          <div className="form-group">
                            <div className="float-right">
                              <a className="text-muted" href="#">
                                Forgot Password?
                              </a>
                            </div>
                          </div>
                          {this.renderInput("password", "Password", "password")}

                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="auth-remember-check"
                              name="remember"
                              onChange={this.handleChange}
                              checked={this.state.data.remember}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="auth-remember-check"
                            >
                              Remember Me
                            </label>
                          </div>
                          <div className="mt-3 text-right">
                            {this.renderButton("Log In")}
                          </div>
                          <div className="mt-4 text-center">
                            <p className="mb-0">
                              Don't Have an Account?
                              <a href="#"> Create account</a>{" "}
                            </p>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
