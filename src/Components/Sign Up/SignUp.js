import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { newUserApi } from "../Actions/Index";
import {
  email,
  required,
  passCheck,
  numberValidation,
  inputValidationLength,
  validURL
} from "../../Validation";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div>
          <div className="error_alert">
            <i className="fa fa-exclamation-triangle" aria-hidden="true">
              -
            </i>
            {error}
          </div>
        </div>
      );
    }
  }

  renderInput = ({ input, meta, label, type, className }) => {
    return (
      <div className="field">
        <input
          {...input}
          placeholder={label}
          type={type}
          className={className}
        />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit(formValues) { console.log(formValues)
    this.props.newUserApi(formValues.email,formValues.passwordSing);
  }
  render() {
    return (
      <>
        <div className="login-wrap">
          <div className="login-html">
            <form
              onSubmit={this.props.handleSubmit(this.onSubmit)}
              className="ui form"
            >
              <input
                id="tab-1"
                type="radio"
                name="tab"
                className="sign-in"
                checked
              />
              <label htmlFor="tab-1" className="tab">
                Sign In
              </label>
              <input id="tab-2" type="radio" name="tab" className="sign-up" />
              <label htmlFor="tab-2" className="tab" />
              <div className="login-form">
                <div className="sign-in-htm">
                  <div className="group">
                    <label htmlFor="user" className="label">
                      Firstanem
                    </label>
                    <Field
                      name="firstanem"
                      type="text"
                      label="Firstname"
                      className="input"
                      component={this.renderInput}
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="user" className="label">
                      Last name
                    </label>
                    <Field
                      name="lastname"
                      type="text"
                      label="Last name"
                      className="input"
                      component={this.renderInput}
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="label">
                      E-Mail
                    </label>
                    <Field
                      name="email"
                      type="email"
                      label="example@gmail.com"
                      className="input"
                      component={this.renderInput}
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="pass" className="label">
                      Password
                    </label>
                    <Field
                      name="passwordSing"
                      type="password"
                      label="*******"
                      className="input"
                      component={this.renderInput}
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="confirmPass" className="label">
                      Confirm Password
                    </label>
                    <Field
                      name="confirmPass"
                      type="password"
                      label="*****"
                      className="input"
                      component={this.renderInput}
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="phone" className="label">
                      Telephone Number
                    </label>
                    <Field
                      name="phone"
                      type="text"
                      label="Put your personal Number"
                      className="input"
                      component={this.renderInput}
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="personalSite" className="label">
                      Personal Site
                    </label>
                    <Field
                      name="personalSite"
                      type="text"
                      label="pesonal Site"
                      className="input"
                      component={this.renderInput}
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="user" className="label">
                      About Me
                    </label>
                    <Field
                      name="AboutMe"
                      type="textarea"
                      label="Tell us about you"
                      className="input"
                      component={this.renderInput}
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="user" className="label">
                      Adress
                    </label>
                    <Field
                      name="adress"
                      type="textarea"
                      label="Address"
                      className="input"
                      component={this.renderInput}
                    />
                  </div>
                  <div className="group">
                    <div className="Checks">
                      <label htmlFor="user" className="label">
                        Male
                      </label>
                      <Field
                        name="Male"
                        type="checkbox"
                        label="Male"
                        component={this.renderInput}
                      />
                      <label htmlFor="user" className="label">
                        Female
                      </label>
                      <Field
                        name="Female"
                        type="checkbox"
                        label="Female"
                        component={this.renderInput}
                      />
                    </div>
                  </div>
                  <div className="group">
                    <div className="Checks">
                      <label htmlFor="accept" className="label">
                        Aceept the Terms:
                      </label>

                      <Field
                        name="accept"
                        type="checkbox"
                        label="accept"
                        component={this.renderInput}
                      />
                    </div>
                  </div>
                  <div className="group">
                    <input type="submit" className="button" value="Sign In" />
                  </div>
                  <div className="hr" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

const validate = formValues => {
  const errors = {};
  errors.email = email(formValues.email);
  errors.passwordSing = required(formValues.passwordSing);
  errors.firstanem = inputValidationLength(formValues.firstanem);
  errors.lastname = inputValidationLength(formValues.lastname);
  errors.confirmPass = passCheck(
    formValues.passwordSing,
    formValues.confirmPass
  );
  errors.phone = numberValidation(formValues.phone);
  errors.personalSite = validURL(formValues.personalSite);
  errors.adress = required(formValues.adress);
  errors.accept = required(formValues.accept);

  return errors;
};

const mapStateToProps = state => {
  return {
    newUser: state.newUser.newUser
  };
};

export default connect(
  mapStateToProps,
  { newUserApi }
)(
  reduxForm({
    form: "singUpForm",
    validate
  })(SignUp)
);
