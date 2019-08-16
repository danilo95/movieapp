import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { newUserApi, defaultError } from "../Actions/Index";
import { Countries, StatesofCountries } from "../DefaultData/DefaultData.js";
import Modal from "../Modal/Modal";
import {
  emailValidation,
  required,
  passCheck,
  numberValidation,
  inputValidationLength,
  validURL,
  birthdayValidation
} from "../../Validation";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = { showModal: false, showSubSelect: false, countryStates: [] };
  }

  handlerModal = () => {
    this.setState({ showModal: true });
  };
  closeModal = () => {
    this.props.defaultError();
    this.setState({ showModal: false });
  };

  countryStates = e => {
    if (e.target.value) {
      this.setState({ showSubSelect: true });
      this.getCountryStates(e.target.value);
    } else {
      this.setState({ showSubSelect: false });
    }
  };

  getCountryStates(option) {
    let selectedOption = option.replace(/['"]+/g, "");

    const result = StatesofCountries.filter(mainstate => {
      if (mainstate.Country === selectedOption) {
        return mainstate;
      }
    });
    this.setState({ countryStates: result });
  }

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div>
          <div className="error_alert">
            <i className="fa fa-exclamation-triangle" aria-hidden="true">
              -{error}
            </i>
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
  renderSelect = ({ input, options, meta, className }) => {
    return (
      <div className="field">
        <select {...input} className={className}>
          <option value="">Select a Value</option>
          {options.map(option => (
            <option key={option.id} value={JSON.stringify(option.value)}>
              {option.value}
            </option>
          ))}
        </select>
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit(formValues) {
    console.log(formValues);
    this.props.newUserApi(formValues.email, formValues.passwordSing);
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
                readOnly
              />

              <label htmlFor="tab-1" className="tab">
                Sign In
              </label>

              <div className="login-form">
                <div className="sign-in-htm">
                  <div className="group">
                    <label htmlFor="user" className="label">
                      firstName
                    </label>
                    <Field
                      name="firstName"
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
                    <label htmlFor="birthdayDate" className="label">
                      Birthday Date
                    </label>
                    <Field
                      name="birthdayDate"
                      type="date"
                      label="birthdayDate"
                      className="input"
                      component={this.renderInput}
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="user" className="label">
                      Country
                    </label>
                    <Field
                      name="country"
                      className="input"
                      onChange={event => this.countryStates(event)}
                      component={this.renderSelect}
                      options={Countries}
                    />
                  </div>
                  {this.state.showSubSelect ? (
                    <div className="group">
                      <label htmlFor="user" className="label">
                        State
                      </label>
                      <Field
                        name="countryState"
                        className="input"
                        component={this.renderSelect}
                        options={this.state.countryStates}
                      />
                    </div>
                  ) : null}
                  <div className="group">
                    <div className="Checks">
                      <label htmlFor="user" className="label">
                        Male
                      </label>
                      <Field
                        name="gender"
                        type="radio"
                        value="male"
                        component={this.renderInput}
                      />
                      <label htmlFor="user" className="label">
                        Female
                      </label>
                      <Field
                        name="gender"
                        type="radio"
                        value="female"
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
        {this.props.loginError.message
          ? (this.handlerModal,
            (
              <Modal
                title="Ups Something Goes Wrong!!"
                content={this.props.loginError.message}
                onDismiss={() => this.closeModal}
              />
            ))
          : null}
        }
      </>
    );
  }
}

const validate = ({
  email,
  passwordSing,
  firstName,
  lastname,
  confirmPass,
  phone,
  personalSite,
  adress,
  accept,
  birthdayDate,
  country,
  countryState
}) => {
  const errors = {};
  errors.email = emailValidation(email);
  errors.passwordSing = required(passwordSing);
  errors.firstName = inputValidationLength(firstName);
  errors.lastname = inputValidationLength(lastname);
  errors.confirmPass = passCheck(passwordSing, confirmPass);
  errors.phone = numberValidation(phone);
  errors.personalSite = validURL(personalSite);
  errors.adress = required(adress);
  errors.accept = required(accept);
  errors.accept = required(accept);
  errors.birthdayDate = birthdayValidation(birthdayDate);
  errors.country = required(country);
  errors.countryState = required(countryState);
  return errors;
};

const mapStateToProps = state => {
  return {
    newUser: state.newUser.newUser,
    loginError: state.newUser.loginError
  };
};

export default connect(
  mapStateToProps,
  { newUserApi, defaultError }
)(
  reduxForm({
    form: "singUpForm",
    validate
  })(SignUp)
);
