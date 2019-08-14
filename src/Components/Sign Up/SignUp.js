import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { newUserApi } from "../Actions/Index";
import {
  email,
  required,
  emailCheck,
  numberValidation
} from "../../Validation";
class Login extends Component {
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

  onSubmit(formValues) {
    this.props.newUserApi(formValues.email, formValues.password_sign);
  }
  render() {
    return (
      <>
        <div className="login-wrap">
          <div className="login-html">
            <form
              onSubmit={() => this.props.handleSubmit(this.onSubmit)}
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
                      Firstname
                    </label>
                    <Field
                      name="Firstname"
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
                      name="Lastname"
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
                      name="Email"
                      type="email"
                      label="example@gmail.com"
                      className="input"
                      component={this.renderInput}
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="confirm_email" className="label">
                      Confirm E-Mail
                    </label>
                    <Field
                      name="Confirm_email"
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
                      name="Password_sign"
                      type="password"
                      label="*******"
                      className="input"
                      component={this.renderInput}
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="phone" className="label">
                      Telephone Number
                    </label>
                    <Field
                      name="Phone"
                      type="text"
                      label="Put your personal Number"
                      className="input"
                      component={this.renderInput}
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="user" className="label">
                      Personal Site
                    </label>
                    <Field
                      name="PesonalSite"
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
                      Address
                    </label>
                    <Field
                      name="Address"
                      type="textarea"
                      label="Address"
                      className="input"
                      component={this.renderInput}
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="user" className="label">
                      Gender
                    </label>
                    <Field className="input" component="select" name="gender">
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </Field>
                  </div>
                  <div className="group">
                    <label htmlFor="accept" className="label">
                      Aceept the Terms:
                    </label>
                    <div className="group">
                      <Field
                        name="accept"
                        type="checkbox"
                        label="Address"
                        className="input"
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
  errors.Email = email(formValues.email);
  errors.Password_sign = required(formValues.password_sign);
  errors.Firstname = required(formValues.Firstname);
  errors.Lastname = required(formValues.Lastname);
  errors.Confirm_email = emailCheck(formValues.email, formValues.confirm_email);
  errors.Phone = numberValidation(formValues.phone);
  errors.PesonalSite = required(formValues.pesonalSite);
  errors.AboutMe = required(formValues.aboutMe);
  errors.Address = required(formValues.Address);

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
  })(Login)
);
